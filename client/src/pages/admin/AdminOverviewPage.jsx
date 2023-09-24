import AdminOverview from '../../components/admin/AdminOverview';
import Sidebar from '../../components/common/Sidebar';

const AdminOverviewPage = () => {
    return (
        <>
            <div className="admin-page h-screen bg-neutral-50 flex">
                <aside className="sidebar">
                    <Sidebar page={"admin"} />
                </aside>
                <main className='content grow px-12 py-8 overflow-auto'>
                    <AdminOverview />
                </main >
            </div >
        </>
    )
}

export default AdminOverviewPage;