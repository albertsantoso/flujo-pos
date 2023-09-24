const SelectPaymentMethodMenu = ({ handleSelectPaymentMethod }) => {
    const selectPaymentMethod = (event) => {
        handleSelectPaymentMethod(event.target.value)
    }

    return (
        <>
            <div className="select-payment-method my-2 w-full">
                <select name="paymentMethod" id="paymentMethod" onChange={selectPaymentMethod} className="w-full h-[48px] p-2 border-2 rounded-lg font-bold bg-neutral-700 text-white">
                    <option value="" selected disabled>Select payment method</option>
                    <option value="Cash">Cash</option>
                    <option value="E-Money">E-Money</option>
                    <option value="Debit Card">Debit Card</option>
                </select>
            </div>
        </>
    )
}

export default SelectPaymentMethodMenu