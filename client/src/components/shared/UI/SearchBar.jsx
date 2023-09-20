import { FaSearch } from 'react-icons/fa'

const SearchBar = () => {
    return (
        <>
            <div className="searchbar">
                <form>
                    <div className="form-group relative flex items-center">
                        <label htmlFor='search' className='absolute text-neutral-500 left-4'>
                            <FaSearch size={20} />
                        </label>
                        <input type="text" id='search' className="shadow-md focus:outline-none bg-white px-12 py-4 rounded-xl font-semibold text-neutral-700" placeholder="Search products..." />
                    </div>
                </form>
            </div >
        </>
    );
};

export default SearchBar;
