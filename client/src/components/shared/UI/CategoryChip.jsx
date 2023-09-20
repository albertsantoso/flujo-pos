import { PiHamburger } from "react-icons/pi";

const CategoryChip = () => {
    return (
        <>
            <div className="category-chip bg-primary py-4 max-h-[62px] min-w-[180px] rounded-xl drop-shadow-md flex items-center justify-center">
                <div className="category-chip-wrapper flex items-center justify-center gap-2 text-white">
                    <div className="category-icon">
                        <PiHamburger size={30} />
                    </div>
                    <div className="category-name">
                        <span className="font-semibold text-lg">Burger</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CategoryChip;
