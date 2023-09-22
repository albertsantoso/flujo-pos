const ChangePassword = () => {
    return (
        <>
            <div className="change-password">
                <form className="flex flex-col gap-2">
                    <input type="password" className="border-2 p-4 w-[300px] rounded-lg" placeholder="New password" />
                    <input type="password" className="border-2 p-4 w-[300px] rounded-lg" placeholder="Confirm password" />
                    <div className="form-action-button mt-auto">
                        <button type="submit" className="bg-primary hover:bg-red-400 active:scale-95 w-full py-4 rounded-lg duration-150">
                            <span className="font-bold text-white drop-shadow-md">
                                Save password
                            </span>
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ChangePassword