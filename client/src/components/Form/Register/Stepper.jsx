import React from 'react';

const Stepper = ({ currStep }) => {
	const styleClass =
		currStep === 1
			? 'flex md:w-full items-center justify-center'
			: 'flex md:w-full items-center justify-center text-blue-600';

	const element2 =
		currStep === 1 ? (
			<span className="mr-2 bg-gray-800 text-white rounded-full w-6">1</span>
		) : (
			<svg
				className="mr-1"
				width="28px"
				height="28px"
				viewBox="0 0 24.00 24.00"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
				<g
					id="SVGRepo_tracerCarrier"
					strokeLinecap="round"
					strokeLinejoin="round"
					stroke="#CCCCCC"
					strokeWidth="0.048"
				></g>
				<g id="SVGRepo_iconCarrier">
					{' '}
					<path
						d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM10.95 17.51C10.66 17.8 10.11 18.08 9.71 18.14L7.25 18.49C7.16 18.5 7.07 18.51 6.98 18.51C6.57 18.51 6.19 18.37 5.92 18.1C5.59 17.77 5.45 17.29 5.53 16.76L5.88 14.3C5.94 13.89 6.21 13.35 6.51 13.06L10.97 8.6C11.05 8.81 11.13 9.02 11.24 9.26C11.34 9.47 11.45 9.69 11.57 9.89C11.67 10.06 11.78 10.22 11.87 10.34C11.98 10.51 12.11 10.67 12.19 10.76C12.24 10.83 12.28 10.88 12.3 10.9C12.55 11.2 12.84 11.48 13.09 11.69C13.16 11.76 13.2 11.8 13.22 11.81C13.37 11.93 13.52 12.05 13.65 12.14C13.81 12.26 13.97 12.37 14.14 12.46C14.34 12.58 14.56 12.69 14.78 12.8C15.01 12.9 15.22 12.99 15.43 13.06L10.95 17.51ZM17.37 11.09L16.45 12.02C16.39 12.08 16.31 12.11 16.23 12.11C16.2 12.11 16.16 12.11 16.14 12.1C14.11 11.52 12.49 9.9 11.91 7.87C11.88 7.76 11.91 7.64 11.99 7.57L12.92 6.64C14.44 5.12 15.89 5.15 17.38 6.64C18.14 7.4 18.51 8.13 18.51 8.89C18.5 9.61 18.13 10.33 17.37 11.09Z"
						fill="#1C64F2"
					></path>{' '}
				</g>
			</svg>
		);

	return (
		<ol className="h-20 flex justify-center px-8 items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
			<li className={styleClass}>
				<span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200">
					{element2}
					Personal <span className="hidden sm:inline-flex sm:ml-2">Info</span>
				</span>
			</li>
			<li className="flex px-6 md:w-full items-center justify-center sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-800 after:border-1 after:hidden sm:after:inline-block"></li>
			<li className="flex md:w-full items-center justify-center">
				<span className="flex items-center">
					<span className="mr-2 bg-gray-800 text-white rounded-full w-6">
						2
					</span>
					Account <span className="hidden sm:inline-flex sm:ml-2">Info</span>
				</span>
			</li>
		</ol>
	);
};

export default Stepper;
