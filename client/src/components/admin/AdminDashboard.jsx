import { GoPersonAdd } from "react-icons/go"
import { BsThreeDotsVertical } from "react-icons/bs"
import { FiTrash } from "react-icons/fi"
import DefaultPFP from './../../assets/default/default_pfp.svg'
import { useSelector } from "react-redux"

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
} from '@chakra-ui/react'


const AdminDashboard = () => {
    return (
        <>
            <div className='admin-dashboard'>
                <div className="dashboard-container">
                    <div className="wrapper">
                        <div className="main-heading mb-8">
                            <div className="greetings">
                                <h1 className='font-bold text-3xl text-neutral-800'>Good Morning, Admin!</h1>
                            </div>
                        </div>
                        <div className="main-content">
                            <div className="grid-wrapper grid grid-cols-4 gap-4">
                                <section className="user">
                                    <div className="section-container bg-white shadow-md px-8 py-6 rounded-lg">
                                        <div className="section-heading flex justify-between">
                                            <div>
                                                <h1 className='font-semibold text-xl'>Cashiers</h1>
                                                <p className='text-sm'>10 registered cashiers</p>
                                            </div>
                                            <div>
                                                <button className='bg-neutral-200 px-4 py-2 rounded-lg shadow-md'>
                                                    <span className='font-medium flex items-center gap-2'>
                                                        <GoPersonAdd size={20} style={{ strokeWidth: ".4px" }} />
                                                        Add cashier
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                        <hr className='my-4' />
                                        <div className="section-content">
                                            <div className="user-list">
                                                <ul>
                                                    <li className='flex items-center'>
                                                        <div className='pfp rounded-full max-w-[44px] mr-4'>
                                                            <img src={DefaultPFP} alt="" className='rounded-full' />
                                                        </div>
                                                        <span className="user-content">
                                                            <h2 className='font-medium'>
                                                                John Doe
                                                            </h2>
                                                            <p className='text-xs text-neutral-600'>
                                                                Registered: Jan 1, 2023
                                                            </p>
                                                        </span>
                                                        <span className='ml-auto'>
                                                            <Menu placement='bottom-end'>
                                                                <MenuButton
                                                                    as={IconButton}
                                                                    aria-label='Options'
                                                                    icon={<BsThreeDotsVertical />}
                                                                    variant='solid'
                                                                />
                                                                <MenuList className='bg-white py-2 shadow-md rounded-lg '>
                                                                    <MenuItem icon={<FiTrash size={14} color='rgba(255,0,0,.8)' />} className='hover:bg-neutral-50 px-4 py-2'>
                                                                        <span className='text-red-500 font-medium'>
                                                                            Delete
                                                                        </span>
                                                                    </MenuItem>
                                                                </MenuList>
                                                            </Menu>
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section className="user">
                                    <div className="section-container bg-white shadow-md px-8 py-6 rounded-lg">
                                        <h1 className='font-semibold text-lg'>Cashiers</h1>
                                    </div>
                                </section>
                                <section className="user">
                                    <div className="section-container bg-white shadow-md px-8 py-6 rounded-lg">
                                        <h1 className='font-semibold text-lg'>Cashiers</h1>
                                    </div>
                                </section>
                                <section className="user">
                                    <div className="section-container bg-white shadow-md px-8 py-6 rounded-lg">
                                        <h1 className='font-semibold text-lg'>Cashiers</h1>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default AdminDashboard