/* eslint-disable react/prop-types */
import Ticket from "./../../assets/ticket.svg";
import "./CashierOrders.css";
import OrderCard from "./ProductCartCard";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCartAsync } from "../../../redux/features/carts";
import CashierAccountBadge from "./CashierAccountBadge";

const CashierOrders = ({ handleOpenModal }) => {
	const carts = useSelector((state) => state.carts.carts);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchCartAsync(1)); //userId masukin
	}, []);

	return (
		<>
			<div className="cashier-orders bg-white shadow-lg h-screen">
				<div className="orders-container bg-white w-[368px] p-4 h-full">
					<div className="orders-wrapper flex flex-col h-full">
						<div className="orders-head mb-6">
							<div className="cashier-account-badge bg-neutral-50 rounded-xl h-[80px] border-2 flex items-center px-6">
								<CashierAccountBadge />
							</div>
						</div>
						<div className="orders-content">
							<div className="orders-section-title mb-4">
								<h2 className="font-bold text-xl">Current Orders</h2>
							</div>
							<div className="orders-list max-h-[420px] mb-4 overflow-auto flex flex-col divide-y-2">
								{carts?.map((order) => {
									return (
										<>
											<OrderCard key={order.id} dataOrder={order} />
										</>
									);
								})}
							</div>
						</div>
						<div className="orders-payment mt-auto">
							<div className="orders-pre-receipt-style relative">
								<div className="orders-pre-receipt w-full px-8 py-4 absolute flex flex-col gap-3 h-full z-[1]">
									<div className="total-items flex items-center justify-between">
										<div className="pre-receipt-item font-medium text-neutral-500">Total items</div>
										<div className="font-bold">{"<V>"}x</div>
									</div>
									<div className="subtotal flex items-center justify-between">
										<div className="pre-receipt-item font-medium text-neutral-500">Subtotal</div>
										<div className="font-bold">Rp. {"<VALUE>"}</div>
									</div>
									<div className="tax flex items-center justify-between">
										<div className="pre-receipt-item font-medium text-neutral-500">Tax</div>
										<div className="font-bold">Rp. {"<VALUE>"}</div>
									</div>
									<div className="total-payment flex items-center justify-between mt-auto text-xl">
										<div className="pre-receipt-item font-medium text-neutral-800">Total</div>
										<div className="font-bold">Rp. {"<VALUE>"}</div>
									</div>
								</div>
								<img src={Ticket} alt="" className="w-full drop-shadow-md" />
							</div>
							<div className="order-button mt-8">
								<button className="bg-primary hover:bg-red-400 active:scale-95 shadow-md w-full py-4 rounded-xl duration-150" onClick={handleOpenModal}>
									<span className="font-bold text-white drop-shadow-sm">
										Continue to payment
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

export default CashierOrders;
