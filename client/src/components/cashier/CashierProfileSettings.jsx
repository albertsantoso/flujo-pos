import { BsFillCloudArrowUpFill } from "react-icons/bs"
import { Link } from "react-router-dom"

const CashierProfileSettings = () => {
    return (
        <>
            <main className="cashier-profile-settings w-[892px] h-full m-auto flex justify-center items-center">
                <div className="cashier-profile-settings-modal-container w-full bg-white p-8 border-2 rounded-xl">
                    <div className="main-heaading mb-8 flex justify-between">
                        <div className="heading-title">
                            <h1 className="font-bold text-2xl text-neutral-800">
                                Profile Settings
                            </h1>
                        </div>
                    </div>
                    <div className="main-content">
                        <form>
                            <div className="form-container flex w-full justify-between">
                                <div className="left-form mr-8 flex flex-col gap-4 w-[520px]">
                                    <div className="form-group flex flex-col">
                                        <label htmlFor="name" className="font-medium mb-2">Username</label>
                                        <input type="text" name="name" id="name" className="w-full border-2 px-4 py-3 font-bold text-neutral-600 rounded-xl placeholder:font-medium" placeholder="john_doe" />
                                    </div>
                                    <div className="form-group flex flex-col">
                                        <label htmlFor="email" className="font-medium mb-2">Email</label>
                                        <input type="emal" name="email" id="email" className="w-full border-2 px-4 py-3 font-bold text-neutral-600 rounded-xl placeholder:font-medium" placeholder="johndoe@gmail.com" />
                                    </div>
                                    <div className="form-group">
                                        <span>Forgot password? </span>
                                        <Link>
                                            <span className="font-medium text-blue-500 hover:underline">Change password</span>
                                        </Link>
                                    </div>
                                    <div className="form-action-button mt-auto">
                                        <button type="submit" className="bg-primary hover:bg-red-400 active:scale-95 w-full py-4 rounded-lg duration-150">
                                            <span className="font-bold text-white drop-shadow-md">
                                                Save changes
                                            </span>
                                        </button>
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
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </>
    )
}

export default CashierProfileSettings