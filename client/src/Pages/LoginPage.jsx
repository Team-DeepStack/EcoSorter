import React, { Fragment } from 'react';
import { motion } from 'framer-motion';
import LoginForm from '../components/Form/Login/LoginForm';
import garbage from '../assets/gif-login-no-bg.png';

const DivVariate = {
	hidden: {
		opacity: 0,
		x: '-25vw',
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			type: 'spring',
			bounce: 0.25,
			duration: 0.5,
			delay: 0.5,
			when: 'beforeChildren',
			staggerChildren: 0.2,
			staggerDirection: 1,
		},
	},
};

const ImgVariate = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			type: 'spring',
			duration: 0.6,
		},
	},
};

const FormVariate = {
	hidden: {
		opacity: 0,
		scale: 0.8,
	},
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			type: 'spring',
			bounce: 0.25,
			duration: 0.5,
			delay: 0.5,
			when: 'beforeChildren',
			delayChildren: 0.1,
			staggerChildren: 0.2,
			staggerDirection: 1,
		},
	},
};

const LoginPage = ({ onLogin }) => {
	return (
		<Fragment>
			<div className="flex justify-center items-center flex-grow">
				<motion.div
					id="box"
					className="bg-gradient-to-r from-cyan-300 via-cyan-500 to-cyan-600 w-4/5 h-[70vh] flex rounded-md"
					variants={DivVariate}
					initial="hidden"
					animate="visible"
				>
					{/* ========================================== */}
					<motion.div
						id="model"
						className="h-full w-7/12 flex justify-center items-end px-5"
						variants={ImgVariate}
					>
						<img src={garbage} alt="" className="w-full" />
					</motion.div>
					{/* ========================================== */}

					<div
						id="input-form"
						className="h-full w-5/12 flex justify-center items-center"
					>
						<motion.div
							id="white-form"
							className="h-[80vh] w-10/12 bg-white drop-shadow-xl rounded-lg flex justify-center items-center flex-col"
							variants={FormVariate}
						>
							<LoginForm onLogin={onLogin} />
						</motion.div>
					</div>
				</motion.div>
			</div>
		</Fragment>
	);
};

export default LoginPage;
