import { useState } from 'react';
import FlujoLogo from './../../Assets/flujo.svg'
import './LoginPage.css'

import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

const LoginPage = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    return (
        <>
            <main className="login-page h-full">
                <div className="container py-60 mx-auto h-full flex justify-center">
                    <div className="wrapper">
                        <div className="main-content flex items-center">
                            <div className="left-side px-20">
                                <div className="logo-wrapper w-[204px]">
                                    <img src={FlujoLogo} alt="" />
                                </div>
                            </div>
                            <div className="right-side px-20">
                                <div>
                                    <h1 className='font-bold text-center mb-6 text-neutral-700' style={{ fontSize: "42px" }}>Login</h1>
                                </div>
                                <form method='post'>
                                    <div className="form-container flex flex-col gap-4">
                                        <div className="form-controller">
                                            <input type="text" id='username' name='username' placeholder="Username" className='border-2 w-[400px] rounded-lg px-4 py-4 placeholder:text-lg font-semibold' />
                                        </div>
                                        <div className="form-controller relative flex items-center">
                                            <input type={passwordVisible ? "text" : "password"} id='password' name='password' placeholder="Password" className='border-2 w-[400px] rounded-lg px-4 py-4 placeholder:text-lg font-semibold' />
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
                                        <div className="action-button">
                                            <button type='submit' className='rounded-lg py-3 px-4 w-full hover bg-primary'>
                                                <span className='font-bold text-lg text-white [text-shadow:_0_0_4px_rgb(0_0_0_/_40%)]'>Login</span>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
};

export default LoginPage;
