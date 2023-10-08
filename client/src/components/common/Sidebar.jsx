/* eslint-disable react/prop-types */
import { Link, useNavigate } from 'react-router-dom'
import FlujoLogo from './../../assets/flujo.svg'
import { MdLogout } from 'react-icons/md'
import { LuSettings } from 'react-icons/lu'
import { GoHome } from 'react-icons/go'
import { FiUsers, FiPieChart, FiGrid } from 'react-icons/fi'
import { Tooltip } from '@chakra-ui/react'
import { onLogout } from '../../../redux/features/users'
import { useDispatch } from 'react-redux'

const Sidebar = ({ page }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = async () => {
        await dispatch(onLogout())
        await navigate('/login')
    }

    return (
        <>
            <div className="left-sidebar sidebar-container min-w-[114px] z-30 h-full px-4 bg-white shadow-xl">
                <div className="wrapper h-full py-4 flex flex-col">
                    <div className="sidebar-head mb-10">
                        <div className="sidebar-logo flex justify-center mx-auto py-6 px-4">
                            <Link to={"/"}>
                                <button onClick={() => window.location.reload()}>
                                    <img src={FlujoLogo} alt="" className='drop-shadow-lg w-[50px]' />
                                </button>
                            </Link>
                        </div>
                    </div>
                    {
                        page == "cashier" ? null : (
                            <div className="sidebar-menus flex flex-col gap-4 items-center">
                                <Tooltip label='Home' color={"white"} placement='right' fontWeight={500} className='bg-secondary bg-opacity-90 px-4 py-2 rounded-lg' openDelay={300}>
                                    <Link to={"/admin"}>
                                        <button className={`menu ${page == "admin" ? "bg-primary shadow-lg" : "bg-transparent hover:bg-red-200 duration-150"}  w-[80px] h-[80px] flex justify-center items-center rounded-[20px]`}>
                                            <span>
                                                <GoHome size={44} color={`${page == "admin" ? "white" : "#505050"}`} style={{ strokeWidth: ".5px" }} />
                                            </span>
                                        </button>
                                    </Link>
                                </Tooltip>
                                <Tooltip label='Products' color={"white"} placement='right' fontWeight={500} className='bg-secondary bg-opacity-90 px-4 py-2 rounded-lg' openDelay={300}>
                                    <Link to={"/admin/products"}>
                                        <button className={`menu ${page == "admin/products" ? "bg-primary shadow-lg" : "bg-transparent hover:bg-red-200 duration-150"} w-[80px] h-[80px] flex justify-center items-center rounded-[20px]`}>
                                            <span>
                                                <FiGrid size={40} color={`${page == "admin/products" ? "white" : "#505050"}`} />
                                            </span>
                                        </button>
                                    </Link>
                                </Tooltip>
                                <Tooltip label='Sales Report' color={"white"} placement='right' fontWeight={500} className='bg-secondary bg-opacity-90 px-4 py-2 rounded-lg' openDelay={300}>
                                    <Link to={"/admin/dashboard"}>
                                        <button className={`menu ${page == "admin/dashboard" ? "bg-primary shadow-lg" : "bg-transparent hover:bg-red-200 duration-150"} w-[80px] h-[80px] flex justify-center items-center rounded-[20px]`}>
                                            <span>
                                                <FiPieChart size={40} color={`${page == "admin/dashboard" ? "white" : "#505050"}`} />
                                            </span>
                                        </button>
                                    </Link>
                                </Tooltip>
                                <Tooltip label='Users' color={"white"} placement='right' fontWeight={500} className='bg-secondary bg-opacity-90 px-4 py-2 rounded-lg' openDelay={300}>
                                    <Link to={"/admin/users"}>
                                        <button className={`menu ${page == "admin/users" ? "bg-primary shadow-lg" : "bg-transparent hover:bg-red-200 duration-150"} w-[80px] h-[80px] flex justify-center items-center rounded-[20px]`}>
                                            <span>
                                                <FiUsers size={40} color={`${page == "admin/users" ? "white" : "#505050"}`} />
                                            </span>
                                        </button>
                                    </Link>
                                </Tooltip>
                            </div>
                        )
                    }
                    <div className="sidebar-foot mt-auto pb-12">
                        <div className="action-buttons flex flex-col gap-4">
                            <button className='bg-neutral-100 hover:bg-neutral-200 duration-100 w-[80px] h-[80px] rounded-[20px]'>
                                <LuSettings className='w-full text-neutral-700 drop-shadow-lg' color='#505050' size={40} />
                            </button>
                            <button className='bg-neutral-100 hover:bg-neutral-200 duration-100 w-[80px] h-[80px] rounded-[20px]' onClick={handleLogout}>
                                <MdLogout className='w-full text-neutral-700 drop-shadow-lg ml-1' color='#505050' size={40} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar