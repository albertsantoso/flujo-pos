import { BsFillCloudArrowUpFill } from "react-icons/bs"

const FileUpload = () => {
    return (
        <>
            <div className="file-upload">
                <div
                    className="form-input-wrapper relative flex justify-center items-center w-[320px] h-[284px] bg-white border-2 border-dashed rounded-xl cursor-pointer"
                    onClick={() =>
                        document.querySelector("#input-file").click()
                    }
                >
                    <div className="flex flex-col items-center justify-center h-full pb-4">
                        <BsFillCloudArrowUpFill
                            size={70}
                            className="text-neutral-300"
                        />
                        <div className="file-input-instruction flex flex-col items-center font-medium">
                            <span>Drag and drop upload</span>
                            <span>
                                or{" "}
                                <span
                                    onClick={() =>
                                        document
                                            .querySelector("#input-file")
                                            .click()
                                    }
                                    className="text-blue-500"
                                >
                                    browse
                                </span>{" "}
                                to choose a file
                            </span>
                        </div>
                    </div>
                    <input type="file" name="" id="input-file" hidden className="absolute" />
                </div>
            </div>
        </>
    )
}

export default FileUpload