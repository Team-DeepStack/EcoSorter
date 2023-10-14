import React, { Fragment, useCallback, useState } from 'react';
import SignInCreds from '../components/Form/Register/SignInCreds';
import UserInfo from '../components/Form/Register/UserInfo';
import Stepper from '../components/Form/Register/Stepper';
import { signUpRoute } from '../utils/APIRoutes';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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
				<div id="box" className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 w-4/5 h-[70vh] flex rounded-md">
					{/* ========================================== */}
					<div id="model" className="h-full w-7/12"></div>
					{/* ========================================== */}

					<div
						id="input-form"
						className="h-full w-5/12 flex justify-center items-center"
					>
						<div
							id="white-form"
							className="h-[80vh] w-10/12 drop-shadow-xl rounded-lg bg-white flex justify-center items-center flex-col"
						>
							<Stepper currStep={step} />
							<form
								className="flex-grow flex w-full justify-center h-full"
								onSubmit={submitHandler}
							>
								{step === 1 ? (
									<SignInCreds
										changeStep={changeToStep}
										credsChange={credsChange}
									/>
								) : (
									<UserInfo changeStep={changeToStep} infoChange={infoChange} />
								)}
							</form>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default RegisterPage;
