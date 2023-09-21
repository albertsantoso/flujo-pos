import { IconButton, Menu, MenuButton, MenuItemOption, MenuList, MenuOptionGroup } from "@chakra-ui/react"
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
                    className='bg-white border-2 rounded-xl w-[60px] h-[60px] flex items-center justify-center'
                />
                <MenuList className="bg-white border-2 py-2 rounded-xl" minWidth='180px'>
                    <MenuOptionGroup title="Sort" className="mb-2 px-4 font-medium" type="radio">
                        <MenuItemOption value="az" className="hover:bg-neutral-100 px-4 py-2" >
                            A-Z
                        </MenuItemOption>
                        <MenuItemOption value="za" className="hover:bg-neutral-100 px-4 py-2" >
                            Z-A
                        </MenuItemOption>
                        <MenuItemOption value="asc" className="hover:bg-neutral-100 px-4 py-2" >
                            Highest price
                        </MenuItemOption>
                        <MenuItemOption value="desc" className="hover:bg-neutral-100 px-4 py-2" >
                            Lowest price
                        </MenuItemOption>
                    </MenuOptionGroup>
                </MenuList>
            </Menu >
        </>
    )
}

export default SortButton