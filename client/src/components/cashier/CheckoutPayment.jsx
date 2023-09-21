/* eslint-disable react/prop-types */
import { AiFillCloseCircle } from "react-icons/ai"

const CheckoutPayment = ({ handleOpenModal }) => {
    return (
        <>
            <main className="checkout-payment-modal w-[462px] h-screen m-auto flex justify-center items-center">
                <div className="checkout-payment-modal-container w-full bg-white p-8 border-2 rounded-xl">
                    <div className="main-heaading mb-8 flex justify-between">
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
                    <div className="main-content">
                        <div className="checkout-order-list ">
                            <div className="product-checkout-card flex items-center gap-8 w-full text-lg font-medium">
                                <div className="product-qty">
                                    <span className="">
                                        4x
                                    </span>
                                </div>
                                <div className="product-name">
                                    <span>
                                        BigMac
                                    </span>
                                </div>
                                <div className="total-product-price ml-auto">
                                    <span>
                                        Rp. 44.000
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default CheckoutPayment