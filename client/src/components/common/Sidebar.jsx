import { Link } from 'react-router-dom'
import FlujoLogo from './../../assets/flujo.svg'
import { MdLogout } from 'react-icons/md'
import { LuSettings } from 'react-icons/lu'
import { GoHome } from 'react-icons/go'
import { FiUsers, FiPieChart, FiGrid } from 'react-icons/fi'
import { Tooltip } from '@chakra-ui/react'

const Sidebar = () => {
    return (
        <>
            <div className="left-sidebar sidebar-container h-full px-4 bg-white shadow-xl">
                <div className="wrapper h-full py-4 flex flex-col">
                    <div className="sidebar-head mb-10">
                        <div className="sidebar-logo flex justify-center mx-auto py-6 px-4">
                            <Link>
                                <img src={FlujoLogo} alt="" className='drop-shadow-lg w-[50px]' />
                            </Link>
                        </div>
                    </div>
                    <div className="sidebar-menus flex flex-col gap-4 items-center">
                        <Tooltip label='Open' color={"white"} placement='right' fontWeight={500} className='bg-secondary bg-opacity-90 px-4 py-2 rounded-lg' openDelay={300}>
                            <div className="menu bg-primary w-[80px] h-[80px] flex justify-center items-center rounded-[20px] shadow-lg">
                                <span>
                                    <GoHome size={44} color='white' style={{ strokeWidth: ".5px" }} />
                                </span>
                            </div>
                        </Tooltip>
                        <Tooltip label='Open' color={"white"} placement='right' fontWeight={500} className='bg-secondary bg-opacity-90 px-4 py-2 rounded-lg' openDelay={300}>
                            <div className="menu bg-primary w-[80px] h-[80px] flex justify-center items-center rounded-[20px] shadow-lg">
                                <span>
                                    <FiGrid size={40} color='white' />
                                </span>
                            </div>
                        </Tooltip>
                        <Tooltip label='Open' color={"white"} placement='right' fontWeight={500} className='bg-secondary bg-opacity-90 px-4 py-2 rounded-lg' openDelay={300}>
                            <div className="menu bg-primary w-[80px] h-[80px] flex justify-center items-center rounded-[20px] shadow-lg">
                                <span>
                                    <FiPieChart size={40} color='white' />
                                </span>
                            </div>
                        </Tooltip>
                        <Tooltip label='Open' color={"white"} placement='right' fontWeight={500} className='bg-secondary bg-opacity-90 px-4 py-2 rounded-lg' openDelay={300}>
                            <div className="menu bg-primary w-[80px] h-[80px] flex justify-center items-center rounded-[20px] shadow-lg">
                                <span>
                                    <FiUsers size={40} color='white' />
                                </span>
                            </div>
                        </Tooltip>
                    </div>
                    <div className="sidebar-foot mt-auto pb-12">
                        <div className="action-buttons flex flex-col gap-10">
                            <div>
                                <LuSettings className='w-full text-neutral-700 drop-shadow-lg' size={40} />
                            </div>
                            <div>
                                <MdLogout className='w-full text-neutral-700 drop-shadow-lg ml-1' size={40} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar