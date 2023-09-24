/* eslint-disable react/no-children-prop */
/* eslint-disable react/prop-types */
import { AiFillCloseCircle } from "react-icons/ai";
import ProductCheckoutCard from "./ProductCheckoutCard";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Instance } from "../../api/instance";
import SelectPaymentMethodMenu from "../shared/UI/SelectPaymentMethodMenu";
import { Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import PaymentReceipt from "../shared/UI/PaymentReceipt";

const CheckoutPayment = ({ handleOpenModal }) => {
	const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
	const [usingCash, setUsingCash] = useState(false);
	const [payAmount, setPayAmount] = useState(0);
	const [onFinalPay, setOnFinalPay] = useState(false)

	const carts = useSelector((state) => state.carts.carts);
	const totalItems = useSelector((state) => state.carts.totalItems);
	const subtotal = useSelector((state) => state.carts.subtotal);
	const tax = useSelector((state) => state.carts.tax);
	const totalAmount = useSelector((state) => state.carts.totalAmount);
	const userId = useSelector((state) => state.users.id);

	const getSelectedPaymentMethod = (selected) => {
		setSelectedPaymentMethod(selected);
	}

	const changes = Number(payAmount - totalAmount);

	const onPay = async (userId) => {
		try {
			if (!selectedPaymentMethod) {
				return alert("Please select payment method");
			}
			if (!carts.length) {
				return alert("Cart is empty");
			}
			const arrayProduct = [];
			carts.map((order) => {
				let productDetails = {
					productId: order.product.id,
					checked_out_product_price: order.product.product_price,
					quantity: order.quantity,
				};
				arrayProduct.push(productDetails);
			});
			const orderSummary = {
				total_amount: subtotal,
				total_amount_with_tax: totalAmount,
				userId: userId,
				products: arrayProduct,
			};
			const orderSummaryJSON = JSON.stringify(orderSummary);
			const accessToken = localStorage.getItem("accessToken");
			await Instance(accessToken).post(`transactions`, orderSummaryJSON, {
				headers: { "Content-Type": "application/json" },
			});

			setOnFinalPay(true)
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		if (selectedPaymentMethod === "Cash") {
			setUsingCash(true);
		} else {
			setUsingCash(false);
		}
	}, [selectedPaymentMethod]);

	return (
		<>
			<main className="checkout-payment-modal w-[812px] h-screen m-auto flex justify-center items-center">
				{
					!onFinalPay ? (
						<>
							<div className="checkout-payment-modal-container w-full bg-white p-8 border-2 rounded-xl">
								<div className="main-heaading mb-4 flex justify-between">
									<div className="heading-title">
										<h1 className="font-bold text-2xl text-neutral-800">Checkout</h1>
									</div>
									<div className="close-button">
										<button onClick={handleOpenModal}>
											<span>
												<AiFillCloseCircle size={30} className="hover:text-red-500" />
											</span>
										</button>
									</div>
								</div>
								<div className="main-content flex">
									<div className="checkout-payment-details w-[428px] pr-10">
										<div className="checkout-order-list">
											<h2 className="font-bold text-lg">Order list</h2>
											{carts?.map((order) => {
												return (
													<>
														<ProductCheckoutCard key={order.id} dataCarts={order} />
													</>
												);
											})}
										</div>
									</div>
									<div className="checkout-payment-summary flex-grow">
										<div className="checkout-summary-container bg-neutral-100 w-[320px]  p-4 rounded-lg">
											<span className="font-bold">Payment method</span>
											<SelectPaymentMethodMenu handleSelectPaymentMethod={getSelectedPaymentMethod} />
											{usingCash ? (
												<>
													<InputGroup>
														<InputLeftAddon children='Rp' />
														<Input type='number' placeholder='Enter amount' bgColor={"white"} min={0} name="payAmount" onChange={(event) => setPayAmount(event.target.value)} />
													</InputGroup>
												</>
											) : null}
											{/* <></> */}
											<div className="payment-summary mt-4 flex flex-col">
												<span className="font-bold text-lg">Total</span>
												<div className="orders-pre-receipt w-full flex flex-col gap-2 mt-2 mb-8">
													<div className="total-items flex items-center justify-between">
														<div className="pre-receipt-item text-sm font-medium text-neutral-500">
															Total items
														</div>
														<div className="font-bold text-sm">{totalItems}x</div>
													</div>
													<div className="subtotal flex items-center justify-between">
														<div className="pre-receipt-item text-sm font-medium text-neutral-500">
															Subtotal
														</div>
														<div className="font-bold text-sm">{subtotal.toLocaleString("id-ID", {
															style: "currency",
															currency: "IDR",
															minimumFractionDigits: 0,
														})}</div>
													</div>
													<div className="tax flex items-center justify-between">
														<div className="pre-receipt-item text-sm font-medium text-neutral-500">
															Tax
														</div>
														<div className="font-bold text-sm">{tax.toLocaleString("id-ID", {
															style: "currency",
															currency: "IDR",
															minimumFractionDigits: 0,
														})}</div>
													</div>
													{
														usingCash ? (
															<div className="tax flex items-center justify-between">
																<div className="pre-receipt-item text-sm font-medium text-neutral-500">
																	Change
																</div>
																<div className="font-bold text-sm">{
																	Number(changes)
																		.toLocaleString("id-ID", {
																			style: "currency",
																			currency: "IDR",
																			minimumFractionDigits: 0,
																		})}
																</div>
															</div>
														) : null
													}
												</div>
												<div className="pay flex items-center justify-between gap-4">
													<button
														className="flex bg-primary hover:bg-red-400 active:scale-95 px-14 py-2 rounded-lg"
														onClick={() => onPay(userId)}
													>
														<span className="font-bold text-white drop-shadow-md">
															Pay
														</span>
													</button>
													<div className="font-bold">{totalAmount.toLocaleString("id-ID", {
														style: "currency",
														currency: "IDR",
														minimumFractionDigits: 0,
													})}</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</>
					) : (
						< PaymentReceipt paymentMethod={selectedPaymentMethod} payAmount={payAmount} changes={changes} />
					)
				}
			</main>
		</>
	);
};

export default CheckoutPayment;
