import { IconButton, Menu, MenuButton, MenuDivider, MenuItemOption, MenuList, MenuOptionGroup } from "@chakra-ui/react"
import { MdSort } from "react-icons/md"

const SortButton = () => {
    return (
        <>
            <Menu placement="bottom-end" closeOnSelect={false}>
                <MenuButton
                    as={IconButton}
                    aria-label='Options'
                    icon={<MdSort size={24} color='#737373' />}
                    variant='outline'
                    className='bg-white shadow-md rounded-xl w-[60px] h-[60px] flex items-center justify-center'
                />
                <MenuList className="bg-white shadow-md py-2 rounded-xl" minWidth='160px'>
                    <MenuOptionGroup title="Alphabet" className="mb-2 px-4 font-medium" type="radio">
                        <MenuItemOption value="az" className="hover:bg-neutral-100 px-4 py-2" >
                            A-Z
                        </MenuItemOption>
                        <MenuItemOption value="za" className="hover:bg-neutral-100 px-4 py-2" >
                            Z-A
                        </MenuItemOption>
                    </MenuOptionGroup>
                    <MenuDivider className="my-2" />
                    <MenuOptionGroup title="Price" className="mb-2 px-4 font-medium" type="radio">
                        <MenuItemOption value="asc" className="hover:bg-neutral-100 px-4 py-2" >
                            Ascending
                        </MenuItemOption>
                        <MenuItemOption value="desc" className="hover:bg-neutral-100 px-4 py-2" >
                            Descending
                        </MenuItemOption>
                    </MenuOptionGroup>
                </MenuList>
            </Menu >
        </>
    )
}

export default SortButton