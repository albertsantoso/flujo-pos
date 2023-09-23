/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux'
import './SelectCategory.css'
import { onCategory } from '../../../../redux/features/products'

const SelectCategory = ({ dataCategories }) => {
    const dispatch = useDispatch()

    const handleSelectOptionValue = (event) => {
        dispatch(onCategory(event.target.value))
    }

    return (
        <>
            <div>
                <select className="custom-select font-semibold text-neutral-600 bg-white border-2 rounded-xl px-4 min-w-[120px] h-[60px] flex items-center justify-center" onChange={handleSelectOptionValue}>
                    <option value="" selected disabled>Select category</option>
                    {dataCategories?.map((category) => {
                        return (
                            <>
                                <option value={category.id}>{category.category_name}</option>
                            </>
                        )
                    })}
                </select>
            </div>
        </>
    )
}

export default SelectCategory