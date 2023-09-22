/* eslint-disable react/prop-types */
import { BsFillCloudArrowUpFill } from "react-icons/bs";
import { AiFillCloseCircle } from 'react-icons/ai'

import './AdminCreateProduct.css'

const AdminCreateProduct = ({ handleOpenModal }) => {
    return (
        <>
            <main className="admin-create-product w-[692px] h-full m-auto flex justify-center items-center">
                <div className="admin-create-product-container w-full bg-white p-8 border-2 rounded-xl">
                    <div className="main-heaading mb-8 flex justify-between">
                        <div className="heading-title">
                            <h1 className="font-bold text-2xl text-neutral-800">
                                Create Product
                            </h1>
                        </div>
                        <div className="close-button">
                            <button onClick={handleOpenModal}>
                                <span>
                                    <AiFillCloseCircle size={30} className="hover:text-red-500" />
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className="main-content">
                        <form>
                            <div className="form-container flex w-full justify-between">
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
                                <div className="right-form flex flex-col justify-between">
                                    <div className="form-group">
                                        <div className="form-group-title mb-2">
                                            <h2 className="font-medium">Picture</h2>
                                        </div>
                                        <div
                                            className="form-input-wrapper relative flex justify-center items-center w-[320px] h-[284px] bg-white border-2 border-dashed rounded-xl cursor-pointer"
                                            onClick={() =>
                                                document.querySelector("#input-file").click()
                                            }
                                        >
                                            <div className="flex flex-col items-center justify-center h-full pb-4">
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
                                            <input type="file" name="" id="input-file" hidden className="absolute" />
                                        </div>
                                    </div>
                                    <div className="form-action-button">
                                        <button type="submit" className="bg-primary w-full py-4 rounded-lg">
                                            <span className="font-bold text-white drop-shadow-md">
                                                Save new product
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </>
    );
};

export default AdminCreateProduct;
