import { useEffect, useState } from "react";
import ProductCard from "../shared/UI/ProductCard";
import axios from "axios";
import SearchBar from "../shared/UI/SearchBar";
import SortButton from "../shared/UI/SortButton";
import CategoryChip from "../shared/UI/CategoryChip";

import './CashierProducts.css'

const CashierProducts = () => {
    const [products, setProducts] = useState([])

    const fetchProduct = async () => {
        try {
            const { data } = await axios.get(`http://localhost:5000/products`)

            console.log(data);
            setProducts(data)
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchProduct()
    }, [])

    return (
        <>
            <div className="cashier-products">
                <div className="cashier-products-container">
                    <div className="wrapper ">
                        <div className="main-heading mb-8 flex justify-between items-center">
                            <div className="greetings">
                                <h1 className="font-bold text-4xl text-neutral-800">Good morning, John!</h1>
                            </div>
                            <div className="search-filter flex gap-2 items-center z-10">
                                <SearchBar />
                                <SortButton />
                            </div>
                        </div>
                        <div className="main-content">
                            <div className="product-category h-[80px] flex w-full overflow-auto gap-2 mb-4">
                                <CategoryChip />
                                <CategoryChip />
                                <CategoryChip />
                                <CategoryChip />
                                <CategoryChip />
                                <CategoryChip />
                                <CategoryChip />
                                <CategoryChip />
                                <CategoryChip />
                                <CategoryChip />
                            </div>
                            <div className="products">
                                <div className="product-list grid grid-cols-4 gap-y-4 gap-x-2">
                                    {
                                        products?.map((product) => {
                                            return (
                                                <ProductCard key={product.id} dataProducts={product} />
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CashierProducts;
