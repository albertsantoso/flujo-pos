import { BsFillCloudArrowUpFill } from "react-icons/bs";

import './AdminCreateProduct.css'

const AdminCreateProduct = () => {
    return (
        <>
            <div className="admin-create-product">
                <div className="admin-create-product-container">
                    <div className="wrapper">
                        <div className="main-heaading mb-8">
                            <div className="heading-title">
                                <h1 className="font-bold text-4xl text-neutral-800">
                                    Create Product
                                </h1>
                            </div>
                        </div>
                        <div className="main-content">
                            <form>
                                <div className="form-container flex">
                                    <div className="left-form mr-8 flex flex-col gap-4">
                                        <div className="form-group flex flex-col">
                                            <label htmlFor="name" className="font-medium mb-2">Product name</label>
                                            <input type="text" name="name" id="name" className="w-full border-2 px-4 py-3 font-bold text-neutral-600 rounded-xl placeholder:font-medium" placeholder="ex. McFlurry Oreo" />
                                        </div>
                                        <div className="form-group flex flex-col">
                                            <label htmlFor="category" className="font-medium mb-2">Product category</label>
                                            <select name="category" id="category" className="w-full border-2 rounded-xl py-4 pl-4 font-medium">
                                                <option value="">Select a category</option>
                                                <option value="burger">Burger</option>
                                                <option value="burger">Burger</option>
                                                <option value="burger">Burger</option>
                                                <option value="burger">Burger</option>
                                                <option value="burger">Burger</option>
                                            </select>
                                        </div>
                                        <div className="form-group flex flex-col">
                                            <label htmlFor="category" className="font-medium mb-2">Description</label>
                                            <textarea id="description" name="description" maxLength={200} placeholder="ex. Sweet and cold, Oreo." className="max-h-[120px] w-full border-2 rounded-xl px-4 py-3 font-medium"></textarea>
                                        </div>
                                        <div className="form-group flex flex-col">
                                            <label htmlFor="category" className="font-medium mb-2">Price</label>
                                            <input id="price" type="number" name="price" className="w-full border-2 px-4 py-4 rounded-xl placeholder:font-medium font-bold" placeholder="Set the price" />
                                        </div>
                                    </div>
                                    <div className="right-form">
                                        <div className="form-group">
                                            <div className="form-group-title mb-4">
                                                <h2 className="font-medium mb-2">Picture</h2>
                                            </div>
                                            <div
                                                className="form-input-wrapper w-[400px] h-[300px] bg-white border-2 border-dashed rounded-xl cursor-pointer"
                                                onClick={() =>
                                                    document.querySelector("#input-file").click()
                                                }
                                            >
                                                <div className="flex flex-col items-center justify-center h-full -my-4">
                                                    <BsFillCloudArrowUpFill
                                                        size={70}
                                                        className="text-neutral-300"
                                                    />
                                                    <div className="file-input-instruction flex flex-col items-center font-medium">
                                                        <span>Drag and drop upload</span>
                                                        <span>
                                                            or{" "}
                                                            <span
                                                                onClick={() =>
                                                                    document
                                                                        .querySelector("#input-file")
                                                                        .click()
                                                                }
                                                                className="text-blue-500"
                                                            >
                                                                browse
                                                            </span>{" "}
                                                            to choose a file
                                                        </span>
                                                    </div>
                                                </div>
                                                <input type="file" name="" id="input-file" hidden />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminCreateProduct;
