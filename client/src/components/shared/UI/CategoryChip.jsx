/* eslint-disable react/prop-types */
const CategoryChip = ({ dataCategory }) => {
    const { category_name } = dataCategory

    return (
        <>
            <div className="category-chip bg-primary py-4 max-h-[62px] min-w-[180px] rounded-xl drop-shadow-md flex items-center justify-center">
                <div className="category-chip-wrapper flex items-center justify-center gap-2 text-white">
                    <div className="category-name flex justify-center">
                        <span className="font-semibold text-lg text-center">{category_name}</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CategoryChip;
