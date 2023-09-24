import { useEffect, useState } from "react";
import SearchBar from "../shared/UI/SearchBar";
import SortButton from "../shared/UI/SortButton";
import CategoryChip from "../shared/UI/CategoryChip";
import { Instance } from "../../api/instance";

import { PiCaretRightBold, PiCaretLeftBold } from "react-icons/pi";

import "./CashierProducts.css";
import CashierProductCard from "../shared/UI/CashierProductCard";
import { useDispatch, useSelector } from "react-redux";
import {
	fetchProductAsync,
	onCategory,
	onClear,
	onNextPage,
	onPreviousPage,
	onSort,
	setPagination,
} from "../../../redux/features/products";
import { useLocation, useNavigate } from "react-router-dom";

const CashierProducts = () => {
	const [categories, setCategories] = useState([]);

	const products = useSelector((state) => state.products.products);
	const orderField = useSelector((state) => state.products.orderField);
	const orderDirection = useSelector((state) => state.products.orderDirection);
	const search = useSelector((state) => state.products.search);
	const page = useSelector((state) => state.products.page);
	const offset = useSelector((state) => state.products.offset);
	const category = useSelector((state) => state.products.category);
	const username = useSelector((state) => state.users.username)

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();

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
		navigate(`/`);
		dispatch(onClear());
		window.location.reload()
	};

	useEffect(() => {
		dispatch(fetchProductAsync(`?status=Active`));
		fetchCategories();
		takeFromQuery();
	}, []);

	useEffect(() => {
		navigate(
			`/?search=${search}&category=${category}&orderField=${orderField}&orderDirection=${orderDirection}&offset=${offset}`,
		);
		dispatch(
			fetchProductAsync(
				`?status=Active&search=${search}&category=${category}&orderField=${orderField}&orderDirection=${orderDirection}&offset=${offset}`,
			),
		);
	}, [orderField, orderDirection, search, page, category]);

	return (
		<>
			<div className="cashier-products">
				<div className="cashier-products-container">
					<div className="wrapper ">
						<div className="main-heading mb-8 flex justify-between items-center">
							<div className="greetings">
								<h1 className="font-bold text-4xl text-neutral-800">
									Hello, {username}!
								</h1>
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
						<div className="main-content mb-6">
							<div className="product-category h-[80px] flex w-full overflow-auto gap-2 mb-4">
								{categories?.map((category) => {
									return (
										<>
											<CategoryChip dataCategory={category} />
										</>
									);
								})}
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
