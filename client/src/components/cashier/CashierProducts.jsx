import { useEffect, useState } from "react";
import SearchBar from "../shared/UI/SearchBar";
import SortButton from "../shared/UI/SortButton";
import CategoryChip from "../shared/UI/CategoryChip";
import { Instance } from "../../api/instance";

import { PiCaretRightBold, PiCaretLeftBold } from 'react-icons/pi'

import "./CashierProducts.css";
import CashierProductCard from "../shared/UI/CashierProductCard";

const CashierProducts = () => {
	const [products, setProducts] = useState([]);
	const [categories, setCategories] = useState([]);

	const fetchProduct = async () => {
		try {
			const { data } = await Instance().get(`products/all`);
			setProducts(data.data);
		} catch (err) {
			console.log(err);
		}
	};

	const fetchCategories = async () => {
		try {
			const { data } = await Instance().get(`categories`);

			setCategories(data.data);
		} catch (err) {
			console.log(err);
		}
	};


	useEffect(() => {
		fetchProduct();
		fetchCategories();
	}, []);

	return (
		<>
			<div className="cashier-products">
				<div className="cashier-products-container">
					<div className="wrapper ">
						<div className="main-heading mb-8 flex justify-between items-center">
							<div className="greetings">
								<h1 className="font-bold text-4xl text-neutral-800">
									Good morning, John!
								</h1>
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
								<SortButton />
							</div>
						</div>
						<div className="main-content mb-6">
							<div className="product-category h-[80px] flex w-full overflow-auto gap-2 mb-4">
								{
									categories?.map((category) => {
										return (
											<>
												<CategoryChip dataCategory={category} />
											</>
										)
									})
								}
							</div>
							<div className="products">
								{/* <div className="product-list relative flex flex-wrap -mx-[8px]"> */}
								<div className="product-list relative grid grid-cols-5 -mx-[8px]">
									{products?.map((product) => {
										return (
											<>
												<div className="flex px-[8px] pb-[16px]">
													<CashierProductCard
														key={product.id}
														dataProducts={product}
													/>
												</div>
											</>
										);
									})}
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
