import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { uploadToModel } from '../utils/APIRoutes';

const ImageUploader = () => {
	const [image, setImage] = useState(null);

	const fileUploadHandler = async (e) => {
		e.preventDefault();
		const file = e.target.files[0];
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onloadend = () => {
			setImage(reader.result);
		};
	};

	const getPrediction = useCallback(async (image) => {
		const { data } = await axios.post(uploadToModel, { image });
		// edit here for integrating ML model
	}, []);

	useEffect(() => {
		if (image) getPrediction(image);
	}, [image, getPrediction]);

	return (
		<div className="h-[50vh] w-4/5 flex items-center justify-center">
			<label
				htmlFor="dropzone-file"
				className="flex flex-col items-center justify-center w-3/5 h-4/5 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
			>
				{image === null ? (
					<div className="flex flex-col items-center justify-center pt-5 pb-6">
						<svg
							className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 20 16"
						>
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
							/>
						</svg>
						<p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
							<span className="font-semibold">Click to upload </span>
							or drag and drop
						</p>
						<p className="text-xs text-gray-500 dark:text-gray-400">
							SVG, PNG or JPG (MAX. 800x400px)
						</p>
					</div>
				) : (
					<img src={image} alt="" />
				)}
				<input
					id="dropzone-file"
					type="file"
					className="hidden"
					onChange={(e) => fileUploadHandler(e)}
				/>
			</label>
		</div>
	);
};

export default ImageUploader;
