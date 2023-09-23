import AdminProducts from '../../components/admin/AdminProducts';
// import AdminDashboard from '../../components/admin/AdminDashboard';
// import AdminUsers from '../../components/admin/AdminUsers';
import Sidebar from '../../components/common/Sidebar';

const AdminPage = () => {
    return (
        <>
            <div className="admin-page h-screen bg-neutral-50 flex">
                <aside className="sidebar">
                    <Sidebar />
                </aside>
                <main className='content grow px-12 py-8 overflow-auto'>
                    {/* <AdminDashboard /> */}
                    <AdminProducts />
                    {/* <AdminUsers /> */}
                </main >
            </div >
        </>
    )
}

export default AdminPage;