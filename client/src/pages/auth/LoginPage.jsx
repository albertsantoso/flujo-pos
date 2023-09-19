import FlujoLogo from './../../Assets/flujo.svg'
import './LoginPage.css'

const LoginPage = () => {
    return (
        <>
            <main className="login-page h-full">
                <div className="container py-60 mx-auto h-full flex justify-center">
                    <div className="wrapper">
                        <div className="main-content flex items-center divide-x-2">
                            <div className="left-side px-20">
                                <div className="logo-wrapper w-[204px]">
                                    <img src={FlujoLogo} alt="" />
                                </div>
                            </div>
                            <div className="right-side px-20">
                                <div>
                                    <h1 className='font-bold text-center mb-6 text-neutral-700' style={{ fontSize: "42px" }}>Login</h1>
                                </div>
                                <form>
                                    <div className="form-container flex flex-col gap-4">
                                        <div className="form-controller">
                                            <input type="text" id='username' name='username' placeholder="Username" className='border-2 w-[400px] rounded-lg px-4 py-4 placeholder:text-lg font-medium' />
                                        </div>
                                        <div className="form-controller">
                                            <input type="text" id='password' name='password' placeholder="Password" className='border-2 w-[400px] rounded-lg px-4 py-4 placeholder:text-lg font-medium' />
                                        </div>
                                        <div className="action-button">
                                            <button type='submit' className='rounded-lg py-3 px-4 w-full hover bg-red-400'>
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
