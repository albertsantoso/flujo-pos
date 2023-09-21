/* eslint-disable react/prop-types */
import BigMac from "./../../assets/product-images/bigmac.png";
import { FaMinus, FaPlus } from "react-icons/fa";
import { TbTrashX } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { changeQuantity, deleteOrder } from "../../../redux/features/carts";

const OrderCard = ({ dataOrder }) => {
	const dispatch = useDispatch();
	const { id, quantity, product } = dataOrder;

	return (
		<>
			<div className="order-card py-4">
				<div className="orders-card-container max-h-[100px]">
					<div className="grid-wrapper flex items-center w-full max-h-[100px] gap-2">
						<div className="product-image max-w-[80px]">
							<img src={BigMac} alt="" className="m-auto" />
						</div>
						<div className="product-detail w-full grid grid-cols-6 grid-rows-2">
							<div className="product-title col-span-5">
								<div className="font-bold text-xl mt-4">
									{product?.product_name}
								</div>
							</div>
							<div className="cancel-product flex justify-end mb-4">
								<button
									className="bg-primary p-2 rounded-lg"
									onClick={() => dispatch(deleteOrder(1, id))} //userId
								>
									<span>
										<TbTrashX size={20} className="text-white" />
									</span>
								</button>
							</div>
							<div className="product-price col-span-5">
								<div className="font-bold text-primary text-xl mt-4">
									{product?.product_price}
								</div>
							</div>
							<div className="quantity-actions flex items-center justify-end">
								<button
									className="bg-secondary p-2 rounded-lg drop-shadow-md"
									onClick={() => dispatch(changeQuantity(1, id, "subtract"))} //userId
								>
									<span>
										<FaMinus color="#fff" className="drop-shadow-sm" />
									</span>
								</button>
								<span className="mx-4 font-bold">{quantity}</span>
								<button
									className="bg-secondary p-2 rounded-lg drop-shadow-md"
									onClick={() => dispatch(changeQuantity(1, id, "add"))} //userId
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

export default OrderCard;
