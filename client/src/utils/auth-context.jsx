import React from 'react';

const AuthContext = React.createContext({
	isLoggedIn: '',
	onLogout: () => {},
});
export default AuthContext;
