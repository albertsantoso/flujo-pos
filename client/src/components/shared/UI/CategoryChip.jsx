import { useDispatch, useSelector } from "react-redux";
import { onCategory } from "../../../../redux/features/products";

/* eslint-disable react/prop-types */
const CategoryChip = ({ dataCategory }) => {
	const category = useSelector((state) => state.products.category);
	const { category_name } = dataCategory;
	const dispatch = useDispatch();

	return (
		<>
			<div
				className="category-chip bg-primary py-4 max-h-[62px] min-w-[180px] rounded-xl drop-shadow-md flex items-center justify-center"
				onClick={() => {
					dispatch(onCategory(category_name));
				}}
			>
				{category === category_name ? (
					<div className="category-chip-wrapper flex items-center justify-center gap-2 text-yellow-400">
						<div className="category-name flex justify-center">
							<span className="font-semibold text-lg text-center">
								{category_name}
							</span>
						</div>
					</div>
				) : (
					<div className="category-chip-wrapper flex items-center justify-center gap-2 text-white">
						<div className="category-name flex justify-center">
							<span className="font-semibold text-lg text-center">
								{category_name}
							</span>
						</div>
					</div>
				)}
			</div>
		</>
	);
};

export default CategoryChip;
