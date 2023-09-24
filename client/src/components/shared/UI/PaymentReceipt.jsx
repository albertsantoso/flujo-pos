import { useSelector } from "react-redux";
import './PaymentReceipt.css'
import Barcode from './../../../assets/barcode1.png'

const PaymentReceipt = ({ paymentMethod, payAmount, changes }) => {
    const paymentMethodSelected = paymentMethod

    const carts = useSelector((state) => state.carts.carts);
    const subtotal = useSelector((state) => state.carts.subtotal);
    const tax = useSelector((state) => state.carts.tax);
    const totalAmount = useSelector((state) => state.carts.totalAmount);

    return (
        <>
            <div className="payment-receipt bg-white rounded-xl w-[480px] flex">
                <div className="receipt-container p-10 w-full">
                    <div>*******************************************************</div>
                    <div className="receipt-title">
                        <h1 className="text-center text-3xl font-bold">
                            PAYMENT RECEIPT
                        </h1>
                    </div>
                    <div>*******************************************************</div>
                    <div className="orders">
                        <div className="table-head flex w-full">
                            <span className="font-bold text-[18px] mr-6">Qty</span>
                            <span className="font-bold text-[18px]">Order</span>
                            <span className="font-bold text-[18px] ml-auto">Price</span>
                        </div>
                        <div className="order-list">
                            {
                                carts?.map((cart) => {
                                    return (
                                        <>
                                            <div className="checked-out-product">
                                                <div className="product-checkout-card flex items-center gap-8 w-full text-lg my-2">
                                                    <div className="product-qty">
                                                        <span className="font-medium text-[16px]">{cart.quantity}x</span>
                                                    </div>
                                                    <div className="product-name">
                                                        <span className="font-medium text-[16px]">{cart.product.product_name}</span>
                                                    </div>
                                                    <div className="total-product-price ml-auto">
                                                        <span className="font-medium text-[16px]">
                                                            {(cart.quantity * cart.product.product_price).toLocaleString("id-ID", {
                                                                style: "currency",
                                                                currency: "IDR",
                                                                minimumFractionDigits: 0,
                                                            })}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                        <div>*******************************************************</div>
                        <div className="total-summary">
                            <div className="total-amount flex justify-end items-center">
                                <h2 className="text-center text-sm font-bold mr-4">
                                    SUBTOTAL
                                </h2>
                                <span className="font-medium text-[16px]">
                                    {subtotal.toLocaleString("id-ID", {
                                        style: "currency",
                                        currency: "IDR",
                                        minimumFractionDigits: 0,
                                    })}
                                </span>
                            </div>
                            <div className="total-amount flex justify-end items-center mb-2">
                                <h2 className="text-center text-sm font-bold mr-4">
                                    TAX
                                </h2>
                                <span className="font-medium text-[16px]">
                                    {tax.toLocaleString("id-ID", {
                                        style: "currency",
                                        currency: "IDR",
                                        minimumFractionDigits: 0,
                                    })}
                                </span>
                            </div>
                            <div className="total-amount flex justify-between">
                                <h2 className="text-center text-xl font-bold">
                                    TOTAL
                                </h2>
                                <span className="font-bold text-lg">
                                    {totalAmount.toLocaleString("id-ID", {
                                        style: "currency",
                                        currency: "IDR",
                                        minimumFractionDigits: 0,
                                    })}
                                </span>
                            </div>
                            {
                                paymentMethodSelected == "Cash" ? (
                                    <>
                                        <div className="on-cash">
                                            <div className="total-amount flex justify-between items-center">
                                                <h2 className="text-center font-medium text-[16px]">
                                                    Cash
                                                </h2>
                                                <span className="font-medium text-[15px]">
                                                    {Number(payAmount).toLocaleString("id-ID", {
                                                        style: "currency",
                                                        currency: "IDR",
                                                        minimumFractionDigits: 0,
                                                    })}
                                                </span>
                                            </div>
                                            <div className="total-amount flex justify-between items-center">
                                                <h2 className="text-center font- text-[16px]">
                                                    Change
                                                </h2>
                                                <span className="font-medium text-[15px]">
                                                    {changes.toLocaleString("id-ID", {
                                                        style: "currency",
                                                        currency: "IDR",
                                                        minimumFractionDigits: 0,
                                                    })}
                                                </span>
                                            </div>
                                        </div>
                                    </>
                                ) : null
                            }
                        </div>
                        <div>*******************************************************</div>
                        <div className="receipt-footer">
                            <h3 className="text-center font-bold text-lg">FLUJO - McDonald's</h3>
                            <h1 className="text-center font-bold text-lg">THANK YOU!</h1>
                            <div className="">
                                <img src={Barcode} alt="" className="object-cover w-[280px] mx-auto mt-4" />
                            </div>
                            <button className="mx-auto w-full bg-neutral-100 mt-8 py-2 hover:bg-neutral-200" onClick={() => window.location.reload()}>
                                <span className="font-bold">
                                    CLOSE X
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentReceipt