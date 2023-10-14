import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { uploadImgRoute } from '../../../utils/APIRoutes';
import { motion } from 'framer-motion';

const UserInfo = ({ changeStep, infoChange }) => {
	const [info, setInfo] = useState({
		username: '',
		address: '',
		pfp: '',
	});
	const [selectedFile, setSelectedFile] = useState(null);

	const inputChangeHandler = (e) => {
		e.preventDefault();
		const { name, value } = e.target;
		setInfo((prevInfo) => ({
			...prevInfo,
			[name]: value,
		}));
	};

	const handleImageChange = (e) => {
		e.preventDefault();
		setSelectedFile(e.target.files[0]);
	};

	const handleUpload = useCallback(async () => {
		const formData = new FormData();
		formData.append('pfp', selectedFile);

		try {
			const { data } = await axios.post(uploadImgRoute, formData);
			if (data) {
				setInfo((prevInfo) => ({
					...prevInfo,
					pfp: data.url,
				}));
			}
		} catch (error) {
			console.error('Error uploading image:', error);
		}
	}, [selectedFile]);

	useEffect(() => {
		if (selectedFile) handleUpload();
	}, [handleUpload, selectedFile]);

	useEffect(() => {
		infoChange(info);
	}, [info, infoChange]);

	return (
		<>
			<div className="text-4xl font-bold">Create your Profile</div>

			<div className="w-10/12">
				<label
					htmlFor="input-group-3"
					className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
				>
					Username
				</label>
				<div className="flex mb-4">
					<span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
						<svg
							className="w-4 h-4 text-gray-500"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 20 20"
						>
							<path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
						</svg>
					</span>
					<input
						type="text"
						name="username"
						id="input-group-3"
						className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
						placeholder="Elon Musk"
						onChange={(e) => inputChangeHandler(e)}
					/>
				</div>

				<label
					htmlFor="input-group-4"
					className="block mb-2 text-sm font-medium text-gray-900"
				>
					Address
				</label>
				<div className="flex mb-4">
					<span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
						<svg
							className="w-4 h-4 text-gray-500"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 20 20"
						>
							<path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
						</svg>
					</span>
					<input
						type="text"
						name="address"
						id="input-group-2"
						className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
						placeholder="Times Square, Manhattan, New York, Bihar"
						onChange={(e) => inputChangeHandler(e)}
					/>
				</div>

				<div className="flex mb-4 justify-center">
					<label
						htmlFor="dropzone-file"
						className="flex flex-col items-center justify-center w-4/5 h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
					>
						<div className="flex flex-col items-center justify-center">
							{info.pfp === '' ? (
								<svg
									className="w-8 h-8 mb-4 text-gray-500"
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
							) : (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									id="Cloudcheck"
									width="64"
								>
									<path
										d="m16.949 11.9-1.55 2.323a1.526 1.526 0 0 1-1.222.678h-.045a1.528 1.528 0 0 1-1.216-.604l-.774-1.023a.5.5 0 1 1 .798-.603l.774 1.023a.536.536 0 0 0 .433.207.517.517 0 0 0 .42-.232l1.55-2.324a.5.5 0 1 1 .832.555Zm-4.834 3.005-.77-1.03a1.499 1.499 0 0 1 2.39-1.81l.37.49 1.18-1.76a1.49 1.49 0 0 1 1.25-.67 1.47 1.47 0 0 1 .83.25 1.061 1.061 0 0 1 .11.08 3.587 3.587 0 0 0-3.4-2.21 5.385 5.385 0 0 0-10.5 1.68c0 .09.01.19.01.28a2.864 2.864 0 0 0 1.59 5.25h7.53a2.558 2.558 0 0 1-.59-.55Zm4.12-.13a.266.266 0 0 1-.05.06 3.61 3.61 0 0 0 1.51-2.24Z"
										fill="#44db83"
										className="color000000 svgShape"
									></path>
								</svg>
							)}
							{info.pfp === '' ? (
								<div>
									<p className="mb-2 text-sm text-gray-500">
										<span className="font-semibold">Click to upload</span> or
										drag and drop
									</p>
									<p className="text-xs text-gray-500 dark:text-gray-400">
										SVG, PNG, JPG (MAX. 800x400px)
									</p>{' '}
								</div>
							) : (
								<p className="mb-2 text-sm text-gray-500">
									<span className="font-semibold">{selectedFile.name}</span>
								</p>
							)}
						</div>
						<input
							id="dropzone-file"
							type="file"
							className="hidden"
							onChange={handleImageChange}
						/>
					</label>
				</div>
			</div>

			<div className="flex justify-evenly items-center w-2/3">
				<button onClick={() => changeStep(1)}>
					<svg
						height="60"
						className="cursor-pointer"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						transform="rotate(180)"
					>
						<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
						<g
							id="SVGRepo_tracerCarrier"
							strokeLinecap="round"
							strokeLinejoin="round"
						></g>
						<g id="SVGRepo_iconCarrier">
							{' '}
							<path
								d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.03 12.53L13.03 15.53C12.88 15.68 12.69 15.75 12.5 15.75C12.31 15.75 12.12 15.68 11.97 15.53C11.68 15.24 11.68 14.76 11.97 14.47L13.69 12.75H8.5C8.09 12.75 7.75 12.41 7.75 12C7.75 11.59 8.09 11.25 8.5 11.25H13.69L11.97 9.53C11.68 9.24 11.68 8.76 11.97 8.47C12.26 8.18 12.74 8.18 13.03 8.47L16.03 11.47C16.32 11.76 16.32 12.24 16.03 12.53Z"
								fill="#1C64F2"
							></path>{' '}
						</g>
					</svg>
				</button>

				<button
					type="submit"
					className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
				>
					Register
				</button>
			</div>
		</>
	);
};

export default UserInfo;
