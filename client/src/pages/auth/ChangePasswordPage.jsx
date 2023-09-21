import ChangePassword from '../../components/auth/ChangePassword'

const ChangePasswordPage = () => {
    return (
        <>
            <div className="change-password-page flex justify-center items-center h-screen -mt-10">
                <div className="bg-neutral-100 border-2 rounded-xl drop-shadow-md p-12">
                    <h1 className='text-center font-bold text-2xl mb-4'>Change Password</h1>
                    <ChangePassword />
                </div>
            </div>
        </>
    )
}

export default ChangePasswordPage