import { useEffect, useState } from "react";
import ProductCard from "../shared/UI/ProductCard";
import SearchBar from "../shared/UI/SearchBar";
import SortButton from "../shared/UI/SortButton";
import SelectCategory from "../shared/UI/SelectCategory";
import { FaPlus } from "react-icons/fa";
import { Tooltip, WrapItem } from "@chakra-ui/react";
import AdminCreateProduct from './AdminCreateProduct'
import { Instance } from "../../api/instance";

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
                                <h1 className="font-bold text-4xl text-neutral-800">Products</h1>
                            </div>
                            <div className="search-filter flex gap-2 items-center z-10">
                                <SearchBar />
                                <SelectCategory />
                                <SortButton />
                            </div>
                        </div>
                        <div className="main-content">
                            <div className="product-list grid grid-cols-5 justify-items-center gap-y-4">
                                {
                                    products?.map((product) => {
                                        return (
                                            <ProductCard key={product.id} dataProducts={product} />
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="absolute bottom-20 right-20">
                            <WrapItem>
                                <Tooltip label='Add new product' placement="left" className="bg-secondary shadow-lg font-semibold text-white p-4 rounded-md">
                                    <button type="submit" className="bg-primary shadow-lg flex items-center p-6 rounded-2xl" onClick={() => setOpenModal(true)}>
                                        <span className="flex flex-col justify-center items-center mr-2">
                                            <FaPlus color='#fff' className='drop-shadow-md' size={24} />
                                        </span>
                                        <span className="font-bold text-lg text-white drop-shadow-md">Add new product</span>
                                    </button>
                                </Tooltip>
                            </WrapItem>
                        </div>
                    </div>
                </div>
                <div className={`create-product-modal absolute top-0 right-0 left-0 bottom-0 bg-neutral-800 bg-opacity-70 backdrop-blur-sm flex justify-center items-center z-20 ${openModal ? "block" : "hidden"}`} onClick={() => setOpenModal(false)}>
                    <AdminCreateProduct />
                </div>
            </div>
        </>
    );
};

export default AdminProducts;
