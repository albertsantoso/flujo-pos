/* eslint-disable react/prop-types */
import { FaMinus, FaPlus } from "react-icons/fa";
import { TbTrashX } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { changeQuantity, deleteOrder } from "../../../redux/features/carts";

const ProductCartCard = ({ dataOrder }) => {
	const dispatch = useDispatch();
	const { id, quantity, product } = dataOrder;
	const userId = useSelector((state) => state.users.id);

	return (
		<>
			<div className="order-card py-4">
				<div className="orders-card-container max-h-[100px]">
					<div className="grid-wrapper flex items-center w-full max-h-[100px] gap-2">
						<div className="product-image max-w-[80px] h-[100px]">
							<img
								src={`http://localhost:5000/${product.product_image.substring(7)}`} alt="" className="mx-auto w-[80%] h-[80%] object-cover"
							/>
						</div>
						<div className="product-detail w-full grid grid-cols-6 grid-rows-2">
							<div className="product-title col-span-4 line-clamp-2">
								<div className="font-bold text-lg leading-tight">
									{product?.product_name}
								</div>
							</div>
							<div className="cancel-product flex justify-end col-span-2">
								<button
									className="bg-primary p-2 rounded-lg w-[36px] h-[36px] flex justify-center items-center"
									onClick={() => dispatch(deleteOrder(userId, id))} //userId
								>
									<span>
										<TbTrashX size={20} className="text-white" />
									</span>
								</button>
							</div>
							<div className="product-price col-span-5">
								<div className="font-bold text-primary text-[18px] mt-4">
									{Number(product?.product_price * quantity).toLocaleString(
										"id-ID",
										{
											style: "currency",
											currency: "IDR",
											minimumFractionDigits: 0,
										},
									)}
								</div>
							</div>
							<div className="quantity-actions flex items-center justify-end">
								<button
									className="bg-secondary p-2 rounded-lg drop-shadow-md"
									onClick={() => dispatch(changeQuantity(userId, id, "subtract"))} //userId
								>
									<span>
										<FaMinus color="#fff" className="drop-shadow-sm" />
									</span>
								</button>
								<span className="mx-4 font-bold min-w-[24px] text-center">
									{quantity}
								</span>
								<button
									className="bg-secondary p-2 rounded-lg drop-shadow-md"
									onClick={() => dispatch(changeQuantity(userId, id, "add"))} //userId
								>
									<span>
										<FaPlus color="#fff" className="drop-shadow-sm" />
									</span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProductCartCard;
