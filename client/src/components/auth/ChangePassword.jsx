import { useState } from "react";
import { Instance } from "../../api/instance";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
    const [newPassword, setNewPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const navigate = useNavigate();

    const handleChangePassword = async() => {
        try {
            const token = localStorage.getItem('accessToken')
            if(!newPassword || !confirm) throw {message: "Please fill in both forms"}
            if(newPassword !== confirm) throw {message: "new password and confirm password must match each other"}
            const response = await Instance(token).patch('users/change-password', {password: newPassword})
            alert('Password has been changed, redirecting you back to homepage')
            setTimeout(() => {
                navigate('/')
            }, 3000)
        } catch (error) {
            alert(error.message)
        }
    }
    return (
        <>
            <div className="change-password">
                <div className="flex flex-col gap-2">
                    <input onChange={(e) => setNewPassword(e.target.value)} type="password" className="border-2 p-4 w-[300px] rounded-lg" placeholder="New password" />
                    <input onChange={(e) => setConfirm(e.target.value)} type="password" className="border-2 p-4 w-[300px] rounded-lg" placeholder="Confirm password" />
                    <div className="form-action-button mt-auto">
                        <button onClick={() => handleChangePassword()} type="submit" className="bg-primary hover:bg-red-400 active:scale-95 w-full py-4 rounded-lg duration-150">
                            <span className="font-bold text-white drop-shadow-md">
                                Save password
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChangePassword