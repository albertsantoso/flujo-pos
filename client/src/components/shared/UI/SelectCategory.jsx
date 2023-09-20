import './SelectCategory.css'

const SelectCategory = () => {
    return (
        <>
            <div>
                <select className="custom-select font-semibold text-neutral-600 bg-white shadow-md rounded-xl px-4 min-w-[120px] h-[60px] flex items-center justify-center">
                    <option value="">Select Category</option>
                    <option value="burger">Burger</option>
                    <option value="Dogs">Dogs</option>
                    <option value="Drinks">Drinks</option>
                    <option value="Sides">Sides</option>
                    <option value="Desserts">Desserts</option>
                </select>
            </div>
        </>
    )
}

export default SelectCategory