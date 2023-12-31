import { useEffect, useState } from "react";
import CashierOrders from "../../components/cashier/CashierOrders";
import CashierProducts from "../../components/cashier/CashierProducts";
import CheckoutPayment from "../../components/cashier/CheckoutPayment";
import Sidebar from "../../components/common/Sidebar";

import "./CashierPage.css";
import { useDispatch, useSelector } from "react-redux";
import { onCheckIsLogin } from "../../../redux/features/users";

import CashierProfileSettings from "../../components/cashier/CashierProfileSettings"

const CashierPage = () => {
	const onProfilePageState = useSelector((state) => state.users.onProfilePage);

	const [openModal, setOpenModal] = useState(false);

	const onOpenModal = () => setOpenModal(!openModal);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(onCheckIsLogin());
	}, []);

	return (
		<>
			{
				!onProfilePageState ? (
					<>
						<div className="cashier-page h-screen bg-neutral-50 flex">
							<aside className="sidebar">
								<Sidebar page={"cashier"} />
							</aside>
							<main className="content grow px-12 py-8 overflow-auto">
								<CashierProducts />
								<div className="checkout-payment-modal z-50">
									<div
										className={`z-20 ${openModal ? "block" : "hidden"
											} absolute top-0 right-0 bottom-0 left-0 h-full`}
									>
										<CheckoutPayment handleOpenModal={onOpenModal} />
									</div>
									<div
										className={`absolute top-0 right-0 left-0 bottom-0 bg-neutral-800 bg-opacity-70 backdrop-blur-sm flex justify-center items-center z-10 ${openModal ? "block" : "hidden"
											}`}
										onClick={onOpenModal}
									></div>
								</div>
							</main>
							<aside>
								<CashierOrders handleOpenModal={onOpenModal} />
							</aside>
						</div>
					</>
				) : (
					<>
						<div className="cashier-page h-screen bg-neutral-50 flex">
							<aside className="sidebar">
								<Sidebar page={"cashier"} />
							</aside>
							<main className="content grow px-12 py-8 overflow-auto">
								<CashierProfileSettings />
							</main>
						</div>
					</>
				)
			}
		</>
	);
};

export default CashierPage;
