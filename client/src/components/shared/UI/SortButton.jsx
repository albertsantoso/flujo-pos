import { Menu, MenuButton, MenuItemOption, MenuList, MenuOptionGroup } from "@chakra-ui/react";
import { MdSort } from "react-icons/md";
import { useDispatch } from "react-redux";
import { onSort } from "../../../../redux/features/products";

const SortButton = () => {
	const dispatch = useDispatch();
	return (
		<>
			<Menu placement="bottom-end" closeOnSelect={false}>
				<MenuButton aria-label="Options" variant="outline">
					<button className="bg-white border-2 rounded-xl w-[60px] h-[60px] flex items-center justify-center">
						<span>
							<MdSort size={24} color="#737373" />
						</span>
					</button>
				</MenuButton>
				<MenuList className="bg-white border-2 py-2 rounded-xl" minWidth="180px">
					<MenuOptionGroup title="Sort" className="mb-2 px-4 font-medium" type="radio">
						<MenuItemOption
							value="az"
							className="hover:bg-neutral-100 px-4 py-2"
							onClick={() => dispatch(onSort("product_name", "ASC"))}
						>
							A-Z
						</MenuItemOption>
						<MenuItemOption
							value="za"
							className="hover:bg-neutral-100 px-4 py-2"
							onClick={() => dispatch(onSort("product_name", "DESC"))}
						>
							Z-A
						</MenuItemOption>
						<MenuItemOption
							value="asc"
							className="hover:bg-neutral-100 px-4 py-2"
							onClick={() => dispatch(onSort("product_price", "DESC"))}
						>
							Highest price
						</MenuItemOption>
						<MenuItemOption
							value="desc"
							className="hover:bg-neutral-100 px-4 py-2"
							onClick={() => dispatch(onSort("product_price", "ASC"))}
						>
							Lowest price
						</MenuItemOption>
					</MenuOptionGroup>
				</MenuList>
			</Menu>
		</>
	);
};

export default SortButton;
