import { useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { onSearch } from "../../../../redux/features/products";

const SearchBar = () => {
	const inputSearch = useRef();
	const dispatch = useDispatch();

	return (
		<>
			<div className="searchbar">
				<div className="form-container">
					<div className="form-group relative flex items-center">
						<label htmlFor="search" className="absolute text-neutral-500 left-4">
							<FaSearch size={20} />
						</label>
						<input
							type="text"
							id="search"
							className="border-2 focus:outline-none bg-white px-12 py-4 rounded-xl font-semibold text-neutral-700"
							placeholder="Search products..."
							ref={inputSearch}
							onChange={() => {
								dispatch(onSearch(inputSearch.current.value));
							}}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default SearchBar;
