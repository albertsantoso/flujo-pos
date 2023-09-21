import { FaSearch } from 'react-icons/fa'

const SearchBar = () => {
    return (
        <>
            <div className="searchbar">
                <div className='form-container'>
                    <div className="form-group relative flex items-center">
                        <label htmlFor='search' className='absolute text-neutral-500 left-4'>
                            <FaSearch size={20} />
                        </label>
                        <input type="text" id='search' className="border-2 focus:outline-none bg-white px-12 py-4 rounded-xl font-semibold text-neutral-700" placeholder="Search products..." />
                    </div>
                </div>
            </div >
        </>
    );
};

export default SearchBar;
