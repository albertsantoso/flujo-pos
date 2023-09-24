/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { BsFillCloudArrowUpFill } from "react-icons/bs";

const FileUploadUpdate = ({ handleProductImageUpdate }) => {
	const [preview, setPreview] = useState(null)

	const getFileImage = (event) => {
		const fileImage = event.target.files[0];

		if (event.target.files && event.target.files.length > 0) {

			handleProductImageUpdate(fileImage);
			setPreview(URL.createObjectURL(fileImage))
		}
	};

	useEffect(() => {
		console.log(preview);
	}, [preview])

	return (
		<>
			<div className="file-upload-update">
				<div
					className="form-input-wrapper relative flex justify-center items-center w-[320px] h-[284px] bg-white border-2 border-dashed rounded-xl cursor-pointer"
					onClick={() => document.querySelector("#product_image_update").click()}
				>
					{
						preview ? (
							<img src={preview} alt="" className="w-full h-full object-cover rounded-xl" />
						) : (
							<div className="flex flex-col items-center justify-center h-full pb-4">
								<BsFillCloudArrowUpFill size={70} className="text-neutral-300" />
								<div className="file-input-instruction font-medium">
									<span onClick={() => document.querySelector("#product_image").click()} className="text-blue-500">
										Browse{" "}
									</span>
									to choose a file
								</div>
							</div>
						)
					}
					<input
						type="file"
						name="product_image_update"
						accept="image/jpeg, image/png, image/gif"
						id="product_image_update"
						hidden
						className="absolute"
						onChange={getFileImage}
					/>
				</div>
			</div>
		</>
	);
};

export default FileUploadUpdate;
