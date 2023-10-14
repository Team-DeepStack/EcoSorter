import React, { Fragment } from 'react';
import LoginForm from '../components/Form/Login/LoginForm';

const LoginPage = ({ onLogin }) => {
	return (
		<Fragment>
			<div className="flex justify-center items-center flex-grow">
				<div id="box" className="bg-gradient-to-r from-cyan-300 via-cyan-500 to-cyan-600 w-4/5 h-[70vh] flex rounded-md">
					{/* ========================================== */}
					<div id="model" className="h-full w-7/12"></div>
					{/* ========================================== */}

					<div
						id="input-form"
						className="h-full w-5/12 flex justify-center items-center"
					>
						<div
							id="white-form"
							className="h-[80vh] w-10/12 bg-white drop-shadow-xl rounded-lg flex justify-center items-center flex-col"
						>
							<LoginForm onLogin={onLogin} />
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default LoginPage;
