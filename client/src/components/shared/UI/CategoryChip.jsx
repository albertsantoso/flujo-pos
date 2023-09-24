import { useDispatch, useSelector } from "react-redux";
import { onCategory } from "../../../../redux/features/products";

/* eslint-disable react/prop-types */
const CategoryChip = ({ dataCategory }) => {
	const category = useSelector((state) => state.products.category);
	const { category_name, id } = dataCategory;
	const dispatch = useDispatch();

	return (
		<>
			<button
				className={`category-chip ${category === id ? "bg-primary" : "bg-white border-2"} duration-100 py-4 max-h-[62px] min-w-[180px] rounded-xl drop-shadow-md flex items-center justify-center`}
				onClick={() => {
					dispatch(onCategory(id));
				}}
			>
				<div className={`category-chip-wrapper flex items-center justify-center gap-2 ${category === id ? "text-white" : "text-black"}`}
				>
					<div className="category-name flex justify-center">
						<span className="font-semibold text-lg text-center">
							{category_name}
						</span>
					</div>
				</div>
			</button>
		</>
	);
};

export default CategoryChip;
