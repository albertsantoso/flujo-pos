const AdminCreateProduct = () => {
    return (
        <>
            <div className="admin-create-product">
                <div className="admin-create-product-container">
                    <div className="wrapper">
                        <div className="main-heaading mb-8">
                            <div className="heading-title">
                                <h1 className="font-bold text-4xl text-neutral-800">Create Product</h1>
                            </div>
                        </div>
                        <div className="main-content">
                            <form>
                                <div className="form-container">
                                    <div className="form-group">
                                        <div className="form-group-title">
                                            <h2 className="font-bold text-2xl">Picture</h2>
                                        </div>
                                        <input type="file" name="" id="" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminCreateProduct