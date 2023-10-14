import React, { Fragment, useCallback, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SignInCreds from '../components/Form/Register/SignInCreds';
import UserInfo from '../components/Form/Register/UserInfo';
import Stepper from '../components/Form/Register/Stepper';
import { signUpRoute } from '../utils/APIRoutes';
import axios from 'axios';
import EarthGIF from '../assets/image.gif';
import { useNavigate } from 'react-router-dom';

const DivVariate = {
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

const gifVariate = {
	hidden: {
		opacity: 0,
		x: '-15vw',
		scale: 0.6,
	},
	visible: {
		opacity: 1,
		x: 0,
		scale: 1,
		transition: {
			type: 'spring',
			bounce: 0.25,
			duration: 0.8,
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

const DivVariate1 = {
	hidden: {
		opacity: 0,
		x: '-15vw',
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			type: 'spring',
			duration: 0.5,
			delay: 0.4,
			when: 'beforeChildren',
			delayChildren: 0.1,
			staggerChildren: 0.2,
			staggerDirection: 1,
		},
	},
	exit: {
		opacity: 0,
		x: '-15vw',
		transition: {
			type: 'spring',
			duration: 0.5,
		},
	},
};

const DivVariate2 = {
	hidden: {
		opacity: 0,
		x: '15vw',
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			type: 'spring',
			bounce: 0.25,
			duration: 0.5,
			delay: 0.4,
			when: 'beforeChildren',
			delayChildren: 0.1,
			staggerChildren: 0.2,
			staggerDirection: 1,
		},
	},
	exit: {
		opacity: 0,
		x: '15vw',
		transition: {
			type: 'spring',
			bounce: 0.25,
			duration: 0.5,
		},
	},
};

const RegisterPage = ({ onLogin }) => {
	const navigate = useNavigate();
	const [register, setRegister] = useState({
		email: '',
		password: '',
		name: '',
		address: '',
		pfp: '',
	});
	const [step, setStep] = useState(1);

	const changeToStep = (to) => {
		setStep(to);
	};

	const credsChange = useCallback((creds) => {
		setRegister((prevData) => ({
			...prevData,
			email: creds.email,
			password: creds.password,
		}));
	}, []);

	const infoChange = useCallback((info) => {
		setRegister((prevData) => ({
			...prevData,
			name: info.username,
			address: info.address,
			pfp: info.pfp,
		}));
	}, []);

	const submitHandler = async (e) => {
		e.preventDefault();

		const { data } = await axios.post(signUpRoute, register);
		if (data.status === 'ok') {
			localStorage.setItem('token', data.user);
			navigate('/profile');
			onLogin();
		}
	};

	return (
		<Fragment>
			<div className="flex justify-center items-center flex-grow">
				<motion.div
					id="box"
					className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 w-4/5 h-[70vh] flex rounded-md"
					variants={DivVariate}
					initial="hidden"
					animate="visible"
				>
					{/* ========================================== */}
					<motion.div
						id="model"
						className="h-full w-7/12"
						variants={gifVariate}
					>
						<img src={EarthGIF} alt="" className="h-full" />
					</motion.div>
					{/* ========================================== */}

					<div
						id="input-form"
						className="h-full w-5/12 flex justify-center items-center"
					>
						<motion.div
							id="white-form"
							className="h-[80vh] w-10/12 drop-shadow-xl rounded-lg bg-white flex justify-center items-center flex-col overflow-hidden"
							variants={FormVariate}
						>
							<Stepper currStep={step} />
							<form
								className="flex-grow flex w-full justify-center h-full"
								onSubmit={submitHandler}
							>
								<AnimatePresence initial={false}>
									{step === 1 ? (
										<motion.div
											key="1"
											variants={DivVariate1}
											initial="hidden"
											animate="visible"
											exit="exit"
											className="w-full h-4/5 flex flex-col justify-around items-center absolute"
										>
											<SignInCreds
												changeStep={changeToStep}
												credsChange={credsChange}
											/>
										</motion.div>
									) : (
										<motion.div
											key="2"
											variants={DivVariate2}
											initial="hidden"
											animate="visible"
											exit="exit"
											className="w-full h-5/6 flex flex-col justify-around items-center absolute"
										>
											<UserInfo
												changeStep={changeToStep}
												infoChange={infoChange}
											/>
										</motion.div>
									)}
								</AnimatePresence>
							</form>
						</motion.div>
					</div>
				</motion.div>
			</div>
		</Fragment>
	);
};

export default RegisterPage;
