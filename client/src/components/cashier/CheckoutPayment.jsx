/* eslint-disable react/prop-types */
import { AiFillCloseCircle } from "react-icons/ai"
import ProductCheckoutCard from "./ProductCheckoutCard"
import { Button, Menu, MenuButton, MenuItemOption, MenuList, MenuOptionGroup } from "@chakra-ui/react"
import { useState } from "react"

const CheckoutPayment = ({ handleOpenModal }) => {
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null)

    return (
        <>
            <main className="checkout-payment-modal w-[812px] h-screen m-auto flex justify-center items-center">
                <div className="checkout-payment-modal-container w-full bg-white p-8 border-2 rounded-xl">
                    <div className="main-heaading mb-4 flex justify-between">
                        <div className="heading-title">
                            <h1 className="font-bold text-2xl text-neutral-800">
                                Checkout
                            </h1>
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
                                <ProductCheckoutCard />
                                <ProductCheckoutCard />
                                <ProductCheckoutCard />
                                <ProductCheckoutCard />
                                <ProductCheckoutCard />
                            </div>
                        </div>
                        <div className="checkout-payment-summary flex-grow">
                            <div className="checkout-summary-container bg-neutral-100 w-full p-4 rounded-lg">
                                <span className="font-bold">Payment method</span>
                                <div className="select-payment-method mt-2">
                                    <Menu placement="bottom" closeOnSelect={false}>
                                        <MenuButton as={Button} className="w-full bg-neutral-800 py-2 rounded-lg">
                                            {
                                                !selectedPaymentMethod ? (
                                                    <>
                                                        <span className="font-medium text-white drop-shadow-md">
                                                            Select payment method
                                                        </span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <span className="font-medium text-white drop-shadow-md">
                                                            {selectedPaymentMethod}
                                                        </span>
                                                    </>
                                                )
                                            }
                                        </MenuButton>
                                        <MenuList minWidth={"284px"} className="text-center bg-neutral-800 rounded-lg py-2">
                                            <MenuOptionGroup type="radio">
                                                <MenuItemOption value="cash" className="hover:bg-neutral-700 py-[2px] px-4" color={"white"} onClick={() => setSelectedPaymentMethod("Cash")}>
                                                    <span className="font-medium drop-shadow-md">
                                                        Cash
                                                    </span>
                                                </MenuItemOption>
                                                <MenuItemOption value="emon" className="hover:bg-neutral-700 py-[2px] px-4" color={"white"} onClick={() => setSelectedPaymentMethod("E-Money")}>
                                                    <span className="font-medium drop-shadow-md">
                                                        E-Money
                                                    </span>
                                                </MenuItemOption>
                                                <MenuItemOption value="debit" className="hover:bg-neutral-700 py-[2px] px-4" color={"white"} onClick={() => setSelectedPaymentMethod("Debit Card")}>
                                                    <span className="font-medium drop-shadow-md">
                                                        Debit Card
                                                    </span>
                                                </MenuItemOption>
                                            </MenuOptionGroup>
                                        </MenuList>
                                    </Menu>
                                </div>
                                <div className="payment-summary mt-4">
                                    <span className="font-bold text-lg">Total</span>
                                    <div className="orders-pre-receipt w-full flex flex-col gap-2 mt-2 mb-8">
                                        <div className="total-items flex items-center justify-between">
                                            <div className="pre-receipt-item text-sm font-medium text-neutral-500">Total items</div>
                                            <div className="font-bold text-sm">{"<V>"}x</div>
                                        </div>
                                        <div className="subtotal flex items-center justify-between">
                                            <div className="pre-receipt-item text-sm font-medium text-neutral-500">Subtotal</div>
                                            <div className="font-bold text-sm">Rp. {"<VALUE>"}</div>
                                        </div>
                                        <div className="tax flex items-center justify-between">
                                            <div className="pre-receipt-item text-sm font-medium text-neutral-500">Tax</div>
                                            <div className="font-bold text-sm">Rp. {"<VALUE>"}</div>
                                        </div>
                                    </div>
                                    <div className="pay flex items-center justify-between gap-4">
                                        <button className="flex bg-primary hover:bg-red-400 active:scale-95 px-14 py-2 rounded-lg">
                                            <span className="font-bold text-white drop-shadow-md">Pay</span>
                                        </button>
                                        <div className="font-bold">Rp. {"<VALUE>"}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main >
        </>
    )
}

export default CheckoutPayment