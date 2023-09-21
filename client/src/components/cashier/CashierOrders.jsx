import { LuSettings } from "react-icons/lu";
import DefaultPFP from "./../../assets/default/default_pfp.svg";
import Ticket from "./../../assets/ticket.svg";
import "./CashierOrders.css";
import OrderCard from "./OrderCard";

const CashierOrders = () => {
    return (
        <>
            <div className="cashier-orders bg-white shadow-lg h-screen">
                <div className="orders-container bg-white w-[368px] p-4 h-full">
                    <div className="orders-wrapper flex flex-col h-full">
                        <div className="orders-head mb-6">
                            <div className="cashier-account-badge bg-neutral-50 rounded-xl h-[80px] border-2 flex items-center px-6">
                                <div className="cashier-account-badge-wrapper flex items-center gap-4 w-full">
                                    <div className="cashier-account-badge-pfp max-w-[50px]">
                                        <img src={DefaultPFP} alt="" />
                                    </div>
                                    <div className="cashier-account-badge-detail">
                                        <h3 className="text-lg font-semibold">John Doe</h3>
                                        <p className="text-sm font-medium text-neutral-600">
                                            Cashier
                                        </p>
                                    </div>
                                    <div className="cashier-account-badge-settings ml-auto">
                                        <div>
                                            <LuSettings
                                                className="text-neutral-600 drop-shadow-lg"
                                                size={28}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="orders-content">
                            <div className="orders-section-title mb-4">
                                <h2 className="font-bold text-xl">Current Orders</h2>
                            </div>
                            <div className="orders-list max-h-[440px] mb-4 overflow-auto flex flex-col divide-y-2">
                                <OrderCard />
                                <OrderCard />
                                <OrderCard />
                                <OrderCard />
                                <OrderCard />
                                <OrderCard />
                            </div>
                        </div>
                        <div className="orders-payment mt-auto">
                            <div className="orders-pre-receipt-style mb-6">
                                <div className="orders-pre-receipt"></div>
                                <img
                                    src={Ticket}
                                    alt=""
                                    className="w-full"
                                />
                            </div>
                            <div className="order-button">
                                <button className="bg-primary shadow-md w-full py-4 rounded-xl">
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
