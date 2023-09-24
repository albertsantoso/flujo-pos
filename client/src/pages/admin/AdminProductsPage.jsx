import AdminProducts from "../../components/admin/AdminProducts"
import Sidebar from "../../components/common/Sidebar"

const AdminProductsPage = () => {
    return (
        <>
            <div className="admin-product-page h-screen bg-neutral-50 flex">
                <aside className="sidebar">
                    <Sidebar page={"admin/products"} />
                </aside>
                <main className='content grow px-12 py-8 overflow-auto h-screen'>
                    <AdminProducts />
                </main >
            </div>
        </>
    )
}

export default AdminProductsPage