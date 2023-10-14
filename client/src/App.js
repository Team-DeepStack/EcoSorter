import React, { useEffect, useState } from 'react';
import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';
import NavBar from './components/Navbar/Navbar';
import RegisterPage from './Pages/RegisterPage';
import LandingPage from './Pages/LandingPage';
import ProfilePage from './Pages/ProfilePage';
import LoginPage from './Pages/LoginPage';

function App() {
	const [isLogged, setIsLogged] = useState(0);

	useEffect(() => {
		const storedUserLoggedInInformation = localStorage.getItem('token');
		if (storedUserLoggedInInformation) {
			setIsLogged(1);
		}
	}, []);

	const logoutHandler = () => {
		setIsLogged(0);
		localStorage.removeItem('token');
	};

	const loginHandler = () => {
		setIsLogged(1);
	};

	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route
				exact
				path="/"
				element={<NavBar onLogout={logoutHandler} isLoggedIn={isLogged} />}
			>
				<Route exact path="/home" element={<LandingPage />} />
				<Route
					exact
					path="/register"
					element={<RegisterPage onLogin={loginHandler} />}
				/>
				<Route
					exact
					path="/login"
					element={<LoginPage onLogin={loginHandler} />}
				/>
				<Route exact path="/profile" element={<ProfilePage />} />
			</Route>,
		),
	);

	return <RouterProvider router={router} />;
}

export default App;
