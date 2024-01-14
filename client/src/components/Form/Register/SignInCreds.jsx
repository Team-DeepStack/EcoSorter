import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const SignInCreds = ({ changeStep, credsChange }) => {
	const [creds, setCreds] = useState({
		email: '',
		password: '',
	});

	const inputChangeHandler = (e) => {
		setCreds((prevCreds) => ({
			...prevCreds,
			[e.target.name]: e.target.value,
		}));
	};

	useEffect(() => {
		credsChange(creds);
	}, [creds, credsChange]);

	return (
		<>
			<div className="text-5xl font-bold">Register</div>
			<div className="w-10/12">
				<label
					htmlFor="input-group-1"
					className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
				>
					Your Email
				</label>
				<div className="flex mb-4">
					<span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
						<svg
							className="w-4 h-4 text-gray-500 dark:text-gray-400"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 20 16"
						>
							<path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
							<path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
						</svg>
					</span>
					<input
						type="email"
						name="email"
						id="input-group-1"
						className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
						placeholder="name@domain.com"
						onChange={(e) => inputChangeHandler(e)}
						value={creds.email}
					/>
				</div>
				<label
					htmlFor="input-group-2"
					className="block mb-2 text-sm font-medium text-gray-900"
				>
					Password
				</label>
				<div className="flex">
					<span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
						<svg
							className="w-4 h-4 text-gray-500"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 16 20"
						>
							<path d="M14 7h-1.5V4.5a4.5 4.5 0 1 0-9 0V7H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Zm-5 8a1 1 0 1 1-2 0v-3a1 1 0 1 1 2 0v3Zm1.5-8h-5V4.5a2.5 2.5 0 1 1 5 0V7Z" />
						</svg>
					</span>
					<input
						type="password"
						name="password"
						id="input-group-2"
						className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
						placeholder="password"
						onChange={(e) => inputChangeHandler(e)}
						value={creds.password}
					/>
				</div>
			</div>

			<div className="flex justify-center items-center">
				<button onClick={() => changeStep(2)}>
					<svg
						height="80"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
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
			</div>
		</>
	);
};

export default SignInCreds;
