import { useEffect, useState } from "react"
import { Instance } from "../../api/instance"
import UserListTable from "../common/UserListTable"
import AdminCreateUser from "./AdminCreateUser"
import { FaPlus } from "react-icons/fa"

const AdminUsers = () => {
    const [users, setUsers] = useState([])
    const [openModal, setOpenModal] = useState(false)

    const onOpenModal = () => {
        setOpenModal(!openModal);
    }

    const fetchUsers = async () => {
        try {
            const { data } = await Instance().get(`users/`);

            setUsers(data.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchUsers()
    }, [])

    const handleCreate = async () => {
        await console.log('creating');
    }

    return (
        <>
            <div className="admin-users">
                <div className="admin-users-container">
                    <div className="wrapper">
                        <div className="main-heading mb-8 flex justify-between items-center">
                            <div className="greetings flex items-center">
                                <h1 className="font-bold text-4xl text-neutral-800 mr-8">Manage Users</h1>
                                <button className="bg-primary hover:bg-red-400 active:scale-95 duration-150 px-4 py-2 rounded-lg" onClick={onOpenModal}>
                                    <span className="font-medium flex items-center gap-2 text-white drop-shadow-md">
                                        <FaPlus />
                                        Add new user
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className="main-content">
                            <div className="user-list flex flex-wrap -mx-[8px]">
                                <UserListTable dataUsers={users} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="create-product-modal z-50">
                    <div className={`z-20 ${openModal ? "block" : "hidden"} absolute top-0 right-0 bottom-0 left-0 h-full`}>
                        <AdminCreateUser handleOpenModal={onOpenModal} />
                    </div>
                    <div className={`absolute top-0 right-0 left-0 bottom-0 bg-neutral-800 bg-opacity-70 backdrop-blur-sm flex justify-center items-center z-10 ${openModal ? "block" : "hidden"}`} onClick={onOpenModal}>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminUsers