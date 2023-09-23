import { useEffect, useState } from "react";
import ProductCard from "../shared/UI/ProductCard";
import SearchBar from "../shared/UI/SearchBar";
import SortButton from "../shared/UI/SortButton";
import SelectCategory from "../shared/UI/SelectCategory";
import { FaPlus } from "react-icons/fa";
import AdminCreateProduct from './AdminCreateProduct'
import { Instance } from "../../api/instance";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const AdminProducts = () => {
    const [products, setProducts] = useState([])
    const [openModal, setOpenModal] = useState(false)

    const fetchProduct = async () => {
        try {
            const { data } = await Instance().get(`products/all`);
            setProducts(data.data);
        } catch (err) {
            console.log(err);
        }
    };

    const onOpenModal = () => {
        setOpenModal(!openModal);
    }

    useEffect(() => {
        fetchProduct()
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
                                    <div className="pagination-container flex items-center">
                                        <button className="bg-neutral-400 rounded-lg p-2"><PiCaretLeftBold color="white" /></button>
                                        <span className="w-[20px] mx-2 text-center font-medium bg-neutral-100 rounded-md">{"1"}</span>
                                        <button className="bg-neutral-400 rounded-lg p-2"><PiCaretRightBold color="white" /></button>
                                    </div>
                                </div>
                                <SearchBar />
                                <SelectCategory />
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
