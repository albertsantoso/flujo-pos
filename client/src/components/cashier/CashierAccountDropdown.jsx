import { LuSettings } from "react-icons/lu";
import { MdLogout } from 'react-icons/md'
import { TbUserEdit } from 'react-icons/tb'
import DefaultPFP from "./../../assets/default/default_pfp.svg";
import { Menu, MenuButton, MenuGroup, MenuItem, MenuList } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onLogout } from "../../../redux/features/users";

const CashierAccountDropdown = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const username = useSelector((state) => state.users.username)
    const role = useSelector((state) => state.users.role)
    const email = useSelector((state) => state.users.email)
    const profile_picture = useSelector((state) => state.users.profile_picture)

    const handleLogout = async () => {
        await dispatch(onLogout())
        await navigate('/login')
    }

    return (
        <>
            <Menu>
                <div className="cashier-account-badge bg-neutral-50 rounded-xl h-[80px] border-2 flex items-center px-6">
                    <div className="cashier-account-badge-wrapper flex items-center gap-4 w-full">
                        <div className="cashier-account-badge-pfp max-w-[50px]">
                            <img src={`http://localhost:5000/${profile_picture.substring(7)}`} alt="" />
                        </div>
                        <div className="cashier-account-badge-detail">
                            <h3 className="text-lg font-semibold">{username}</h3>
                            <p className="text-sm font-medium text-neutral-600">
                                {role}
                            </p>
                        </div>
                        <MenuButton className="ml-auto" colorScheme="none">
                            <div className="cashier-account-badge-settings ml-auto">
                                <div>
                                    <LuSettings
                                        className="text-neutral-600 drop-shadow-lg"
                                        size={28}
                                    />
                                </div>
                            </div>
                        </MenuButton>
                    </div>
                </div>
                <MenuList className="bg-neutral-100 border-2 mt-[24px] -mr-[26px] py-2 rounded-lg drop-shadow-md" minWidth={"336px"}>
                    <MenuGroup title={email} fontSize={"16px"} color={"#4a4a4a"}>
                        <MenuItem className="px-4 py-2 hover:bg-neutral-300">
                            <span className="font-bold flex justify-between w-full">
                                Profile Settings
                                <TbUserEdit size={24} />
                            </span>
                        </MenuItem>
                        <MenuItem className="px-4 py-2 hover:bg-neutral-300">
                            <span onClick={() => handleLogout()} className="text-red-500 font-bold flex justify-between w-full">
                                Logout
                                <MdLogout size={20} />
                            </span>
                        </MenuItem>
                    </MenuGroup>
                </MenuList>
            </Menu>
        </>
    )
}

export default CashierAccountDropdown