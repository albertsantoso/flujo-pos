import AdminDashboard from '../../components/admin/AdminDashboard'
import Sidebar from '../../components/common/Sidebar'

const AdminDashboardPage = () => {
    return (
        <>
            <div className="admin-dashboard-page h-screen bg-neutral-50 flex">
                <aside className="sidebar">
                    <Sidebar page={"admin/dashboard"} />
                </aside>
                <main className='content grow px-12 py-8 overflow-auto'>
                    <AdminDashboard />
                </main >
            </div>
        </>
    )
}

export default AdminDashboardPage