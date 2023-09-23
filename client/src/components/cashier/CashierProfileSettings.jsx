import { useState } from "react";
import FileUpload from "../shared/UI/FileUpload";
import DefaultPFP from "./../../assets/default/default_pfp.svg";
import { AiFillCloseCircle } from "react-icons/ai";
import { useSelector } from "react-redux";
import axios from "axios";
import { Instance } from "../../api/instance";

const CashierProfileSettings = () => {
    const [openModal, setOpenModal] = useState(false)
    const [requestResetPassword, setRequestResetPassword] = useState(false)
    const username = useSelector((state) => state.users.username)
    const email = useSelector((state) => state.users.email)

    const onOpenModal = () => {
        setOpenModal(!openModal);
    }

    const onRequestResetPassword = async () => {
        try {
            setRequestResetPassword(true)
            console.log(email);
            const response = await Instance().post('users/recover-password', {email})
            console.log(response);
            alert('Email succesfully sent, please check your inbox')
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <main className="cashier-profile-settings w-[692px] m-auto flex justify-center items-center">
                <div className="cashier-profile-settings-modal-container w-full bg-white p-8 border-2 rounded-xl">
                    <div className="main-heaading mb-12 flex justify-between">
                        <div className="heading-title">
                            <h1 className="font-bold text-4xl text-neutral-800">
                                Profile Settings
                            </h1>
                        </div>
                    </div>
                    <div className="main-content flex">
                        <div className="left-side flex flex-col items-center mr-14">
                            <div className="profile-picture w-[160px] mb-2">
                                <img src={DefaultPFP} alt="" />
                            </div>
                            <span className="font-medium text-blue-600 hover:underline hover:cursor-pointer" onClick={onOpenModal}>Change profile photo</span>
                        </div>
                        <div className="profile-detail py-2">
                            <div className="profile-username mb-2">
                                <h2 className="font-bold text-2xl">{username}</h2>
                            </div>
                            <div className="profile-email mb-8">
                                <h3 className="font-medium text-xl text-neutral-500">{email}</h3>
                            </div>
                            <div className="reset-password mt-auto">
                                <button className="bg-primary hover:bg-red-400 active:scale-95 duration-150 px-4 py-2 rounded-lg" onClick={onRequestResetPassword}>
                                    <span className="font-medium text-white drop-shadow-md">
                                        Reset password
                                    </span>
                                </button>
                                {
                                    requestResetPassword ? (
                                        <>
                                            <div className="mt-2 font-medium">We have sent request to your email.</div>
                                        </>
                                    ) : (
                                        null
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="create-product-modal z-50">
                    <div className={`z-20 ${openModal ? "block" : "hidden"} absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center`}>
                        <div className="file-upload-container p-8 rounded-xl bg-white flex flex-col items-center">
                            <div className="section-heading mb-4 font-bold text-lg flex w-full justify-center">
                                <span>
                                    Update profile photo
                                </span>
                                <div className="close-button ml-auto">
                                    <button onClick={onOpenModal}>
                                        <span>
                                            <AiFillCloseCircle size={30} className="hover:text-red-500" />
                                        </span>
                                    </button>
                                </div>
                            </div>
                            <div className="wrapper mb-4">
                                <FileUpload />
                            </div>
                            <button className="bg-primary hover:bg-red-400 active:scale-95 duration-150 w-full py-2 rounded-lg">
                                <span className="font-medium text-white drop-shadow-md">
                                    Save profile photo
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className={`absolute top-0 right-0 left-0 bottom-0 bg-neutral-800 bg-opacity-70 backdrop-blur-sm flex justify-center items-center z-10 ${openModal ? "block" : "hidden"}`}>
                    </div>
                </div>
            </main>
        </>
    )
}

export default CashierProfileSettings