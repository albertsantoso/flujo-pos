import { LuSettings } from 'react-icons/lu'
import DefaultPFP from './../../assets/default/default_pfp.svg'
import BigMac from "./../../assets/product-images/bigmac.png";
import { FaMinus, FaPlus } from 'react-icons/fa';
import { TbTrashX } from 'react-icons/tb'

import Ticket from './../../assets/ticket.svg'
import './CashierOrders.css'

const CashierOrders = () => {
    return (
        <>
            <div className="cashier-orders bg-white shadow-lg h-screen">
                <div className="orders-container bg-white w-[368px] p-4 h-full">
                    <div className="orders-wrapper flex flex-col h-full">
                        <div className="orders-head mb-6">
                            <div className="cashier-account bg-neutral-200 rounded-xl h-[80px] shadow-md flex items-center px-6">
                                <div className="cashier-account-wrapper flex items-center gap-4 w-full">
                                    <div className="cashier-account-pfp max-w-[50px]">
                                        <img src={DefaultPFP} alt="" />
                                    </div>
                                    <div className="cashier-account-detail">
                                        <h3 className='text-lg font-semibold'>John Doe</h3>
                                        <p className='text-sm font-medium text-neutral-600'>Cashier</p>
                                    </div>
                                    <div className="cashier-account-settings ml-auto">
                                        <div>
                                            <LuSettings className='text-neutral-600 drop-shadow-lg' size={28} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="orders-content">
                            <div className="orders-section-title mb-4">
                                <h2 className='font-bold text-xl'>Current Orders</h2>
                            </div>
                            <div className="orders-list max-h-[440px] mb-4 overflow-auto flex flex-col divide-y-2">
                                <div className="order-card py-4">
                                    <div className="orders-card-container max-h-[100px]">
                                        <div className="grid-wrapper flex items-center w-full max-h-[100px] gap-2">
                                            <div className="product-image">
                                                <img src={BigMac} alt="" className='max-w-[80px] m-auto' />
                                            </div>
                                            <div className="product-detail w-full grid grid-cols-6 grid-rows-2">
                                                <div className="product-title col-span-5">
                                                    <span className='font-semibold text-xl'>McChicken</span>
                                                </div>
                                                <div className="cancel-product flex justify-end mb-4">
                                                    <button className='bg-primary p-2 rounded-lg'>
                                                        <span>
                                                            <TbTrashX size={20} className='text-white' />
                                                        </span>
                                                    </button>
                                                </div>
                                                <div className="product-price col-span-5">
                                                    <div className='font-bold text-primary text-lg'>Rp. 42.000</div>
                                                </div>
                                                <div className="quantity-actions flex items-center justify-end">
                                                    <button className='bg-secondary p-2 rounded-lg drop-shadow-md'>
                                                        <span>
                                                            <FaMinus color='#fff' className='drop-shadow-sm' />
                                                        </span>
                                                    </button>
                                                    <span className='mx-4 font-bold'>1</span>
                                                    <button className='bg-secondary p-2 rounded-lg drop-shadow-md'>
                                                        <span>
                                                            <FaPlus color='#fff' className='drop-shadow-sm' />
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="orders-payment mt-auto">
                            <div className="orders-pre-receipt-style mb-6">
                                <div className="orders-pre-receipt">

                                </div>
                                <img src={Ticket} alt="" className='w-full drop-shadow-[0_0_4px_rgba(0,0,0,0.2)]' />
                            </div>
                            <div className="order-button">
                                <button className='bg-primary w-full py-4 rounded-xl'>
                                    <span className='font-bold text-white drop-shadow-sm'>
                                        Continue to payment
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CashierOrders