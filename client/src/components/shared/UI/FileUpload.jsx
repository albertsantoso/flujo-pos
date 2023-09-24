/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { BsFillCloudArrowUpFill } from "react-icons/bs";

const FileUpload = ({ handleProductImage, previousImage }) => {
	const [newImage, setNewImage] = useState(null)
	const [preview, setPreview] = useState(null)

	const getFileImage = (event) => {
		const fileImage = event.target.files[0];

		if (fileImage) {
			setPreview(URL.createObjectURL(fileImage));
			setNewImage(fileImage);
			handleProductImage(fileImage);
		}
	};

	useEffect(() => { console.log(preview); }, [preview])

	return (
		<>
			<div className="file-upload">
				<div
					className="form-input-wrapper relative flex justify-center items-center w-[320px] h-[284px] bg-white border-2 border-dashed rounded-xl cursor-pointer"
					onClick={() => document.querySelector("#product_image").click()}
				>
					<div className="flex flex-col items-center justify-center h-full pb-4">
						<BsFillCloudArrowUpFill size={70} className="text-neutral-300" />
						{
							newImage ? (
								<>
									<img src={preview} alt="" className="w-[200px] h-[200px]" />
								</>
							) : (
								<>
									<img src={previousImage} alt="" />
								</>
							)
						}
						<div className="file-input-instruction flex flex-col items-center font-medium">
							<span>Drag and drop upload</span>
							<span>
								or{" "}
								<span
									onClick={() => document.querySelector("#product_image").click()}
									className="text-blue-500"
								>
									browse
								</span>{" "}
								to choose a file
							</span>
						</div>
					</div>
					<input
						type="file"
						name="product_image"
						id="product_image"
						hidden
						className="absolute"
						onChange={getFileImage}
					/>
				</div>
			</div>
		</>
	);
};

export default FileUpload;
