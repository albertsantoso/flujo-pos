/* eslint-disable react/prop-types */
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
} from '@chakra-ui/react'

import DefaultPFP from "./../../assets/default/default_pfp.svg";
import { Instance } from '../../api/instance';
import toast from 'react-hot-toast';

const UserListTable = ({ dataUsers }) => {
    const users = dataUsers

    return (
        <>
            <TableContainer minWidth={"60%"} fontFamily={"Inter"} className='bg-white p-4 rounded-xl border-2 border-neutral-200'>
                <Table variant='unstyled' size={"md"}>
                    <Thead color={"#bababa"}>
                        <Tr>
                            <Th width={""}>
                                <span className='font-bold text-[14px] text-neutral-500'>Username</span>
                            </Th>
                            <Th width={""}>
                                <span className='font-bold text-[14px] text-neutral-500'>Email</span>
                            </Th>
                            <Th width={"3%"} textAlign={"center"}>
                                <span className='font-bold text-[14px] text-neutral-500'>Role</span>
                            </Th>
                            <Th width={"4%"} textAlign={"center"}>
                                <span className='font-bold text-[14px] text-neutral-500'>Status</span>
                            </Th>
                            <Th width={"4%"}>
                                <span className='font-bold text-[14px] text-neutral-500'>Actions</span>
                            </Th>
                        </Tr>
                    </Thead>
                    <Tbody fontWeight={700}>
                        {
                            users.map((user, index) => {
                                const id = index + 1
                                const accessToken = localStorage.getItem("accessToken");
                                const changeStatus = async () => {
                                    try {
                                        if (user.status == "Active") {
                                            const newStatus = "Disabled"
                                            console.log(`the button will change ${user.username}'s status from ${user.status} into ${newStatus}`);
                                            const response = await Instance(accessToken).patch('users/change-status', { username: user.username, newStatus })
                                            toast.success(response.data.message);
                                            window.location.reload();
                                        } else if (user.status == "Disabled") {
                                            const newStatus = "Active"
                                            console.log(`the button will change ${user.status} into ${newStatus}`);
                                            const response = await Instance(accessToken).patch('users/change-status', { username: user.username, newStatus })
                                            toast.success(response.data.message);
                                            window.location.reload();
                                        }
                                    } catch (error) {
                                        toast.error(error.response.data.message);
                                    }
                                }
                                return (
                                    <>
                                        <Tr>
                                            <Td>
                                                <div className='flex items-center gap-4'>
                                                    <div className="cashier-account-badge-pfp max-w-[50px]">
                                                        <img src={DefaultPFP} alt="" />
                                                    </div>
                                                    <span>
                                                        {user.username}
                                                    </span>
                                                </div>
                                            </Td>
                                            <Td> {user.email} </Td>
                                            <Td textAlign={"center"}> {user.role} </Td>
                                            <Td textAlign={"center"}>
                                                <div className={`${user.status === "Active" ? "bg-green-400" : "bg-red-400"}  w-[100px] mx-auto py-2 rounded-lg`}>
                                                    <span className='text-white drop-shadow-md'>
                                                        {user.status}
                                                    </span>
                                                </div>
                                            </Td>
                                            <Td>
                                                <button onClick={changeStatus} className='bg-primary py-2 px-4 rounded-lg'>
                                                    <span className='text-white drop-shadow-md'>Delete</span>
                                                </button>
                                            </Td>
                                        </Tr>
                                    </>
                                )
                            })
                        }
                    </Tbody>
                </Table>
            </TableContainer >
        </>
    )
}

export default UserListTable