import FlujoLogo from './../../Assets/flujo.svg'

const LoginPage = () => {
    return (
        <>
            <main className="login-page py-72">
                <div className="container flex justify-center">
                    <div className="wrapper">
                        <div className="main-content flex divide-x-2">
                            <div className="left-side">
                                <div className="logo-wrapper w-[204px] ">
                                    <img src={FlujoLogo} alt="" />
                                </div>
                            </div>
                            <div className="right-side">
                                <div className="form-container">
                                    <form>
                                        <div className="form-controller">
                                            <input type="text" id='username' name='username' placeholder="Username" />
                                        </div>
                                        <div className="form-controller">
                                            <input type="password" id='password' name='password' placeholder="Password" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
};

export default LoginPage;
