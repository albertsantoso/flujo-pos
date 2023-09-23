/* eslint-disable react/prop-types */
import { useState, useRef } from "react"
import { AiFillCloseCircle, AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { Instance } from "../../api/instance";

const AdminCreateUser = ({ handleOpenModal }) => {
    const [passwordVisible, setPasswordVisible] = useState(false)

    const username = useRef();
    const email = useRef();
    const password = useRef();

    const handleCreate = async () => {
        try {
            const dataToSend = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
            }
            const response = await Instance().post('users/register', {username: username.current.value, email: email.current.value, password: password.current.value})
            console.log(response);
            if(response) {
                alert('new cashier succesfully created')
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <main className="admin-create-product w-[692px] h-full m-auto flex justify-center items-center">
                <div className="admin-create-product-container w-full bg-white p-8 border-2 rounded-xl">
                    <div className="main-heaading mb-8 flex justify-between">
                        <div className="heading-title">
                            <h1 className="font-bold text-2xl text-neutral-800">
                                Create new user
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
                            <div className="form-container">
                                <div className="flex flex-col gap-4">
                                    <div className="form-group flex flex-col">
                                        <label htmlFor="username" className="font-semibold mb-2">Username</label>
                                        <input ref={username} type="text" name="username" id="username" className="w-full border-2 px-4 py-3 font-bold text-neutral-600 rounded-xl placeholder:font-semibold" placeholder="johndoe" />
                                    </div>
                                    <div className="form-group flex flex-col">
                                        <label htmlFor="email" className="font-semibold mb-2">Email</label>
                                        <input ref={email} type="email" name="email" id="email" className="w-full border-2 px-4 py-3 font-bold text-neutral-600 rounded-xl placeholder:font-semibold" placeholder="johndoe@gmail.com" />
                                    </div>
                                    <div className="form-group flex flex-col">
                                        <label htmlFor="name" className="font-semibold mb-2">Password</label>
                                        <div className="form-controller relative flex items-center">
                                            <input ref={password} type={passwordVisible ? "text" : "password"} id='password' name='password' placeholder="Password" className='w-full border-2 px-4 py-3 font-bold text-neutral-600 rounded-xl placeholder:font-semibold' />
                                            <button type='button' onClick={() => setPasswordVisible(!passwordVisible)} className='absolute right-2 p-2 rounded-md cursor-pointer hover:bg-neutral-100 duration-150'>
                                                {
                                                    passwordVisible ? (
                                                        <AiOutlineEye size={24} className='text-neutral-500' />
                                                    ) : (
                                                        <AiOutlineEyeInvisible size={24} className='text-neutral-500' />
                                                    )
                                                }
                                            </button>
                                        </div>
                                    </div>
                                    <div className="form-action-button">
                                        <button onClick={handleCreate} type="button" className="bg-primary hover:bg-red-400 active:scale-95 duration-150 w-full py-4 rounded-lg">
                                            <span className="font-bold text-white drop-shadow-md">
                                                Add new cashier
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
    )
}

export default AdminCreateUser