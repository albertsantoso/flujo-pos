import { LuSettings } from "react-icons/lu";
import DefaultPFP from "./../../assets/default/default_pfp.svg";

const CashierAccountBadge = () => {
    return (
        <>
            <div className="cashier-account-badge-wrapper flex items-center gap-4 w-full">
                <div className="cashier-account-badge-pfp max-w-[50px]">
                    <img src={DefaultPFP} alt="" />
                </div>
                <div className="cashier-account-badge-detail">
                    <h3 className="text-lg font-semibold">John Doe</h3>
                    <p className="text-sm font-medium text-neutral-600">
                        Cashier
                    </p>
                </div>
                <div className="cashier-account-badge-settings ml-auto">
                    <div>
                        <LuSettings
                            className="text-neutral-600 drop-shadow-lg"
                            size={28}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CashierAccountBadge