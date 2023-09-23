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

const UserListTable = ({ dataUsers }) => {
    const users = dataUsers

    return (
        <>
            <TableContainer minWidth={"50%"} fontFamily={"Inter"} className='bg-neutral-50 p-4 rounded-xl border-2 border-neutral-200'>
                <Table variant='unstyled' size={"md"}>
                    <Thead color={"#bababa"}>
                        <Tr>
                            <Th width={""}>
                                <span className='font-bold text-[14px] text-neutral-500'>Username</span>
                            </Th>
                            <Th width={"16%"}>
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
                            users.map((user) => {
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
                                                <button className='bg-primary py-2 px-4 rounded-lg'>
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