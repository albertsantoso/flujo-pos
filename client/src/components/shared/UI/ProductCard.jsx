/* eslint-disable react/prop-types */
import { FaPlus } from "react-icons/fa";
import BigMac from "./../../../assets/product-images/bigmac.png";
import "./ProductCard.css";

const ProductCard = ({ dataProducts }) => {
    const { product_name, product_description, product_price } = dataProducts;

    return (
        <>
            <div className="product-card w-[324px] h-[426px] rounded-xl bg-white">
                <div className="card-container p-0 inline-flex w-full h-full relative">
                    <div className="card-wrapper p-8 w-full flex flex-col h-full">
                        <div className="product-image mb-4 mx-auto">
                            <img src={BigMac} alt="" className="max-h-44" />
                        </div>
                        <div className="product-title">
                            <h4 className="font-bold text-[22px] mb-2"> {product_name} </h4>
                        </div>
                        <div className="product-description mt-auto mb-2 w-[60%]">
                            <p className="font-medium text-sm text-neutral-500 line-clamp-2">
                                {product_description}
                            </p>
                        </div>
                        <div className="product-price">
                            <span className="font-bold text-[28px] text-primary">{product_price.toLocaleString("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 })}</span>
                        </div>
                        <div className="absolute bottom-8 right-6">
                            <button type="submit" className="bg-secondary rounded-full w-[90px] h-[90px] drop-shadow-md">
                                <span className="flex justify-center items-center">
                                    <FaPlus color='#fff' className='drop-shadow-md' size={30} />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductCard;
