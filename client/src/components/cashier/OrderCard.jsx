import BigMac from "./../../assets/product-images/bigmac.png";
import { FaMinus, FaPlus } from "react-icons/fa";
import { TbTrashX } from "react-icons/tb";

const OrderCard = () => {
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
                                <div className="font-bold text-xl mt-4">McChicken</div>
                            </div>
                            <div className="cancel-product flex justify-end mb-4">
                                <button className="bg-primary p-2 rounded-lg">
                                    <span>
                                        <TbTrashX size={20} className="text-white" />
                                    </span>
                                </button>
                            </div>
                            <div className="product-price col-span-5">
                                <div className="font-bold text-primary text-xl mt-4">Rp. 42.000</div>
                            </div>
                            <div className="quantity-actions flex items-center justify-end">
                                <button className="bg-secondary p-2 rounded-lg drop-shadow-md">
                                    <span>
                                        <FaMinus color="#fff" className="drop-shadow-sm" />
                                    </span>
                                </button>
                                <span className="mx-4 font-bold">1</span>
                                <button className="bg-secondary p-2 rounded-lg drop-shadow-md">
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