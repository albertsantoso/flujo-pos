/* eslint-disable react/prop-types */
import Ticket from "./../../assets/ticket.svg";
import "./CashierOrders.css";
import ProductCartCard from "./ProductCartCard";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCartAsync, setOrderSummary } from "../../../redux/features/carts";
import CashierAccountBadge from "./CashierAccountDropdown";
import { onCheckIsLogin } from "../../../redux/features/users";

const CashierOrders = ({ handleOpenModal }) => {
	const carts = useSelector((state) => state.carts.carts);
	const totalItems = useSelector((state) => state.carts.totalItems);
	const subtotal = useSelector((state) => state.carts.subtotal);
	const tax = useSelector((state) => state.carts.tax);
	const totalAmount = useSelector((state) => state.carts.totalAmount);
	const userId = useSelector((state) => state.users.id);
	const dispatch = useDispatch();

	const onStartUp = async () => {
		await dispatch(onCheckIsLogin());
	};
	useEffect(() => {
		onStartUp();
	}, []);

	useEffect(() => {
		dispatch(fetchCartAsync(userId));
	}, [userId]);

	useEffect(() => {
		dispatch(setOrderSummary(userId)); //userId
	}, [carts]);

	return (
		<>
			<div className="cashier-orders bg-white shadow-lg h-screen">
				<div className="orders-container bg-white w-[376px] p-4 h-full">
					<div className="orders-wrapper flex flex-col h-full">
						<div className="orders-head mb-6">
							<CashierAccountBadge />
						</div>
						<div className="orders-content">
							<div className="orders-section-title mb-4">
								<h2 className="font-bold text-xl">Current Orders</h2>
							</div>
							<div className="orders-list max-h-[420px] mb-4 overflow-auto flex flex-col divide-y-2">
								{carts?.map((order) => {
									return (
										<>
											<ProductCartCard key={order.id} dataOrder={order} />
										</>
									);
								})}
							</div>
						</div>
						<div className="orders-payment mt-auto">
							<div className="orders-pre-receipt-style relative">
								<div className="orders-pre-receipt w-full px-8 py-4 absolute flex flex-col gap-3 h-full z-[1]">
									<div className="total-items flex items-center justify-between">
										<div className="pre-receipt-item font-medium text-neutral-500">
											Total items
										</div>
										<div className="font-bold">{totalItems}x</div>
									</div>
									<div className="subtotal flex items-center justify-between">
										<div className="pre-receipt-item font-medium text-neutral-500">
											Subtotal
										</div>
										<div className="font-bold">
											{subtotal.toLocaleString("id-ID", {
												style: "currency",
												currency: "IDR",
												minimumFractionDigits: 0,
											})}
										</div>
									</div>
									<div className="tax flex items-center justify-between">
										<div className="pre-receipt-item font-medium text-neutral-500">
											Tax
										</div>
										<div className="font-bold">
											{tax.toLocaleString("id-ID", {
												style: "currency",
												currency: "IDR",
												minimumFractionDigits: 0,
											})}
										</div>
									</div>
									<div className="total-payment flex items-center justify-between mt-auto text-xl">
										<div className="pre-receipt-item font-medium text-neutral-800">
											Total
										</div>
										<div className="font-bold">
											{totalAmount.toLocaleString("id-ID", {
												style: "currency",
												currency: "IDR",
												minimumFractionDigits: 0,
											})}
										</div>
									</div>
								</div>
								<img src={Ticket} alt="" className="w-full drop-shadow-md" />
							</div>
							<div className="order-button mt-8">
								<button
									className="bg-primary hover:bg-red-400 active:scale-95 shadow-md w-full py-4 rounded-xl duration-150"
									onClick={handleOpenModal}
								>
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
