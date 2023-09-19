import { Link } from 'react-router-dom'
import FlujoLogo from './../../assets/flujo.svg'
import { RiDashboard3Line } from 'react-icons/ri'


const AdminPage = () => {
    return (
        <>
            <div className="admin-page h-screen bg-neutral-50 flex">
                <aside className="left-sidebar bg-white w-[120px] h-full shadow-xl">
                    <div className="container h-full">
                        <div className="wrapper h-full py-4 flex flex-col">
                            <div className="sidebar-head mb-10">
                                <div className="sidebar-logo w-[50px] flex justify-center mx-auto py-6">
                                    <Link>
                                        <img src={FlujoLogo} alt="" />
                                    </Link>
                                </div>
                            </div>
                            <div className="sidebar-menus flex flex-col gap-4 items-center">
                            </div>
                            <div className="sidebar-foot mt-auto pb-20">
                                <div className="action-buttons">
                                    <div className="menu">
                                        <span className='w-full'>
                                            <RiDashboard3Line className='w-full' size={40} />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>
                <main className='dashboard'>
                    <div className="container px-14 py-12">
                        <div className="wrapper">
                            <div className="main-heading mb-8">
                                <div className="greetings">
                                    <h1 className='font-bold text-3xl text-neutral-800'>Good Morning, Admin!</h1>
                                </div>
                            </div>
                            <div className="main-content">
                                <h2 className='font-semibold text-2xl'>Dashboard</h2>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default AdminPage;