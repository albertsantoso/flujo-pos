import AdminUsers from "../../components/admin/AdminUsers"
import Sidebar from "../../components/common/Sidebar"

const AdminUsersPage = () => {
    return (
        <>
            <div className="admin-users-page h-screen bg-neutral-50 flex">
                <aside className="sidebar">
                    <Sidebar page={"admin/users"} />
                </aside>
                <main className='content grow px-12 py-8 overflow-auto h-screen'>
                    <AdminUsers />
                </main >
            </div >
        </>
    )
}

export default AdminUsersPage