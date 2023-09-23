/* eslint-disable react/prop-types */
import { FaPlus } from "react-icons/fa";
import "./ProductCard.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../redux/features/carts";

const ProductCard = ({ dataProducts }) => {
	const { id, product_name, product_description, product_image, product_price } = dataProducts;

	const dispatch = useDispatch();

	return (
		<>
			<div className="product-card w-[322px] h-[426px] rounded-xl bg-white">
				<div className="card-container p-0 inline-flex w-full h-full relative">
					<div className="card-wrapper p-8 w-full flex flex-col h-full">
						<div className="product-image mb-4 mx-auto">
							<img src={`http://localhost:5000/${id <= 18 ? product_image : product_image.substring(7)}`} alt="" />
						</div>
						<div className="product-title">
							<h4 className="font-bold text-[22px] mb-2"> {product_name} </h4>
						</div>
						<div className="product-description mt-auto mb-2 w-[60%]">
							<p className="font-medium text-sm text-neutral-500 line-clamp-2">
								{product_description}
							</p>
						</div>
						<div className="product-price">
							<span className="font-bold text-[28px] text-primary">
								{product_price.toLocaleString("id-ID", {
									style: "currency",
									currency: "IDR",
									minimumFractionDigits: 0,
								})}
							</span>
						</div>
						<div className="absolute bottom-8 right-6">
							<button
								type="button"
								className="bg-secondary rounded-full w-[90px] h-[90px] drop-shadow-md"
								onClick={() => dispatch(addToCart(1, id))} //userId
							>
								<span className="flex justify-center items-center">
									<FaPlus color="#fff" className="drop-shadow-md" size={30} />
								</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProductCard;
