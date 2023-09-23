/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { BsFillCloudArrowUpFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { setUpdatedPicture } from "../../../../redux/features/users";

const FileUpload = ({ handleProductImage }) => {
	const updated_picture = useSelector((state) => state.users.updated_picture);
	const dispatch = useDispatch();

	const getFileImage = (event) => {
		const fileImage = event.target.files[0];

		handleProductImage(fileImage);
	};

	const onUpload = (event) => {
		try {
			const new_pic = event.target.files[0];
			if (new_pic.size > 1000000 || new_pic.type.split("/")[0] !== "image") {
				throw {
					message: "max size is 1 mb and file must by image",
				};
			}
			dispatch(setUpdatedPicture(new_pic));
		} catch (error) {
			alert(error.message);
		}
	};

	return (
		<>
			<div className="file-upload">
				<div
					className="form-input-wrapper relative flex justify-center items-center w-[320px] h-[284px] bg-white border-2 border-dashed rounded-xl cursor-pointer"
					onClick={() => document.querySelector("#product_image").click()}
				>
					<div className="flex flex-col items-center justify-center h-full pb-4">
						<BsFillCloudArrowUpFill size={70} className="text-neutral-300" />
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
						accept=".jpg, .jpeg, .png, .pdf"
						className="absolute"
						onChange={onUpload}
					/>
				</div>
			</div>
		</>
	);
};

export default FileUpload;
