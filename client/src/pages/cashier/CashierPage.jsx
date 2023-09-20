import CashierOrders from "../../components/cashier/CashierOrders"
import CashierProducts from "../../components/cashier/CashierProducts"
import Sidebar from "../../components/common/Sidebar"

import './CashierPage.css'

const CashierPage = () => {
    return (
        <>
            <div className="cashier-page h-screen bg-neutral-50 flex">
                <aside className="sidebar">
                    <Sidebar />
                </aside>
                <main className='content grow px-12 py-8 overflow-auto'>
                    {/* <AdminDashboard /> */}
                    <CashierProducts />
                </main >
                <aside>
                    <CashierOrders />
                </aside>
            </div>
        </>
    )
}

export default CashierPage