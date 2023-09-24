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

const AdminProducts = () => {
    const [openModal, setOpenModal] = useState(false)
    const [categories, setCategories] = useState([]);

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

    const onOpenModal = () => {
        setOpenModal(!openModal);
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
            dispatch(setPagination(selectedPage, selectedOffset));
        }
    };

    const clearFilter = () => {
        navigate(`/admin`);
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
            `/admin/?search=${search}&category=${category}&orderField=${orderField}&orderDirection=${orderDirection}&offset=${offset}`,
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
            <div className="admin-products">
                <div className="admin-products-container">
                    <div className="wrapper">
                        <div className="main-heading mb-8 flex justify-between items-center">
                            <div className="greetings">
                                <h1 className="font-bold text-4xl text-neutral-800">Manage Products</h1>
                            </div>
                            <div className="search-filter flex gap-2 items-center z-10">
                                <div className="pagination-wrapper mr-4">
                                    <button
                                        className="bg-neutral-400 rounded-lg p-2"
                                        onClick={() => {
                                            dispatch(onPreviousPage());
                                        }}
                                    >
                                        <PiCaretLeftBold color="white" />
                                    </button>
                                    <span className="w-[20px] mx-2 text-center font-medium bg-neutral-100 rounded-md">
                                        {page}
                                    </span>
                                    <button
                                        className="bg-neutral-400 rounded-lg p-2"
                                        onClick={() => {
                                            dispatch(onNextPage());
                                        }}
                                    >
                                        <PiCaretRightBold color="white" />
                                    </button>
                                </div>
                                <button
                                    className="bg-neutral-400 rounded-lg p-2"
                                    onClick={() => {
                                        clearFilter();
                                    }}
                                >
                                    <div>CLEAR FILTER</div>
                                </button>
                                <SearchBar />
                                <SelectCategory dataCategories={categories} />
                                <SortButton />
                            </div>
                        </div>
                        <div className="main-content">
                            <div className="product-list flex flex-wrap -mx-[8px]">
                                {/* <div className="product-list grid grid-cols-5 justify-items-center gap-y-4"> */}
                                {
                                    products?.map((product) => {
                                        return (
                                            <>
                                                <div className="flex px-[8px] pb-[16px]">
                                                    <ProductCard key={product.id} dataProducts={product} />
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="absolute bottom-20 right-20">
                            <button type="submit" className="bg-primary hover:bg-red-400 active:scale-95 shadow-lg flex items-center p-6 rounded-2xl duration-150" onClick={onOpenModal}>
                                <span className="flex flex-col justify-center items-center mr-2">
                                    <FaPlus color='#fff' className='drop-shadow-md' size={24} />
                                </span>
                                <span className="font-bold text-lg text-white drop-shadow-md">Add new product</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="create-product-modal z-50">
                    <div className={`z-20 ${openModal ? "block" : "hidden"} absolute top-0 right-0 bottom-0 left-0 h-full`}>
                        <AdminCreateProduct handleOpenModal={onOpenModal} />
                    </div>
                    <div className={`absolute top-0 right-0 left-0 bottom-0 bg-neutral-800 bg-opacity-70 backdrop-blur-sm flex justify-center items-center z-10 ${openModal ? "block" : "hidden"}`} onClick={onOpenModal}>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminProducts;
