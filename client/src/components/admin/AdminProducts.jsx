import { useEffect, useState } from "react";
import ProductCard from "../shared/UI/ProductCard";
import SearchBar from "../shared/UI/SearchBar";
import SortButton from "../shared/UI/SortButton";
import SelectCategory from "../shared/UI/SelectCategory";
import { FaPlus } from "react-icons/fa";
import AdminCreateProduct from './AdminCreateProduct'
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductAsync, onCategory, onClear, onNextPage, onPreviousPage, onSort, setPagination } from "../../../redux/features/products";
import { useLocation, useNavigate } from "react-router-dom";
import { Instance } from "../../api/instance";
import AdminUpdateProduct from "./AdminUpdateProduct";
import AdminProductCategory from "./AdminProductCategory";

const AdminProducts = () => {
    const [openCreateProductModal, setOpenCreateProductModal] = useState(false)
    const [openUpdateProductModal, setOpenUpdateProductModal] = useState(false)
    const [categories, setCategories] = useState([]);
    const [productId, setProductId] = useState(null)

    const products = useSelector((state) => state.products.products);
    const orderField = useSelector((state) => state.products.orderField);
    const orderDirection = useSelector((state) => state.products.orderDirection);
    const search = useSelector((state) => state.products.search);
    const page = useSelector((state) => state.products.page);
    const offset = useSelector((state) => state.products.offset);
    const category = useSelector((state) => state.products.category);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const onOpenCreateProductModal = () => {
        setOpenCreateProductModal(!openCreateProductModal);
    }

    const onOpenUpdateProductModal = (_productId) => {
        setOpenUpdateProductModal(!openUpdateProductModal);
        setProductId(_productId)
    }

    const fetchCategories = async () => {
        try {
            const accessToken = localStorage.getItem("accessToken");
            const { data } = await Instance(accessToken).get(`categories`);

            setCategories(data.data);
        } catch (err) {
            console.log(err);
        }
    };

    const takeFromQuery = () => {
        const queryParams = new URLSearchParams(location.search);
        const selectedCategory = queryParams.get("category");
        const selectedOrderField = queryParams.get("orderField");
        const selectedOrderDirection = queryParams.get("orderDirection");
        const selectedOffset = queryParams.get("offset");
        if (selectedCategory) {
            dispatch(onCategory(selectedCategory));
        }
        if (selectedOrderDirection && selectedOrderField) {
            dispatch(onSort(selectedOrderField, selectedOrderDirection));
        }
        if (selectedOffset) {
            const selectedPage = Number(selectedOffset) / 10 + 1;
            dispatch(setPagination(selectedPage, Number(selectedOffset)));
        }
    };

    const clearFilter = () => {
        navigate(`/admin/products`);
        dispatch(onClear());
        window.location.reload()
    };

    useEffect(() => {
        dispatch(fetchProductAsync());
        fetchCategories();
        takeFromQuery();
    }, []);

    useEffect(() => {
        navigate(
            `/admin/products?search=${search}&category=${category}&orderField=${orderField}&orderDirection=${orderDirection}&offset=${offset}`,
        );
        dispatch(
            fetchProductAsync(
                `?search=${search}&category=${category}&orderField=${orderField}&orderDirection=${orderDirection}&offset=${offset}`,
            ),
        );
    }, [orderField, orderDirection, search, page, category]);

    useEffect(() => {
        dispatch(fetchProductAsync())
    }, [])

    return (
        <>
            <div className="admin-products" id="admin-products-section">
                <div className="admin-products-container">
                    <div className="wrapper">
                        <div className="main-heading mb-8 flex justify-between items-center">
                            <div className="left-heading flex items-center">
                                <div className="greetings mr-8">
                                    <h1 className="font-bold text-4xl text-neutral-800">Manage Products</h1>
                                </div>
                                <div className="add-new-product-button">
                                    <button type="submit" className="bg-primary hover:bg-red-400 active:scale-95 duration-150 px-4 py-2 rounded-lg flex items-center" onClick={onOpenCreateProductModal}>
                                        <span className="add-icon flex flex-col justify-center items-center mr-2">
                                            <FaPlus color='#fff' className='drop-shadow-md' />
                                        </span>
                                        <span className="font-medium flex items-center gap-2 text-white drop-shadow-md">Add new product</span>
                                    </button>
                                </div>
                            </div>
                            <div className="search-filter flex gap-2 items-center z-10">
                                <div className="pagination-wrapper mr-4 flex items-center">
                                    <button
                                        className="bg-white border-2 rounded-lg p-2"
                                        onClick={() => {
                                            dispatch(onPreviousPage());
                                        }}
                                    >
                                        <PiCaretLeftBold color="black" />
                                    </button>
                                    <span className="w-[22px] mx-2 text-center font-bold bg-neutral-100 rounded-md">
                                        {page}
                                    </span>
                                    <button
                                        className="bg-white border-2 rounded-lg p-2"
                                        onClick={() => {
                                            dispatch(onNextPage());
                                        }}
                                    >
                                        <PiCaretRightBold color="black" />
                                    </button>
                                </div>
                                <SearchBar />
                                <SelectCategory dataCategories={categories} />
                                <SortButton />
                                <button
                                    className="bg-white border-2 rounded-xl px-4 h-[60px] flex items-center justify-center"
                                    onClick={() => {
                                        clearFilter();
                                    }}
                                >
                                    <div className="font-medium">Clear Filter</div>
                                </button>
                            </div>
                        </div>
                        <div className="main-content flex ">
                            <div className="product-category w-[440px]">
                                <AdminProductCategory />
                            </div>
                            <div className="product-list grid grid-cols-4">
                                {
                                    products?.map((product) => {
                                        return (
                                            <>
                                                <div className="flex px-[8px] pb-[16px]">
                                                    <ProductCard key={product.id} dataProducts={product} handleOpenUpdateProductModal={onOpenUpdateProductModal} />
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div >
                <div className="create-product-modal z-50">
                    <div className={`z-20 ${openCreateProductModal ? "block" : "hidden"} absolute top-0 right-0 bottom-0 left-0 h-full`}>
                        <AdminCreateProduct handleOpenModal={onOpenCreateProductModal} />
                    </div>
                    <div className={`absolute top-0 right-0 left-0 bottom-0 bg-neutral-800 bg-opacity-70 backdrop-blur-sm flex justify-center items-center z-10 ${openCreateProductModal ? "block" : "hidden"}`} onClick={onOpenCreateProductModal}>
                    </div>
                </div>
                <div className="update-product-modal z-50">
                    <div className={`z-20 ${openUpdateProductModal ? "block" : "hidden"} absolute top-0 right-0 bottom-0 left-0 h-full`}>
                        <AdminUpdateProduct handleOpenModal={onOpenUpdateProductModal} productId={productId} />
                    </div>
                    <div className={`absolute top-0 right-0 left-0 bottom-0 bg-neutral-800 bg-opacity-70 backdrop-blur-sm flex justify-center items-center z-10 ${openUpdateProductModal ? "block" : "hidden"}`} >
                    </div>
                </div>
            </div >
        </>
    );
};

export default AdminProducts;
