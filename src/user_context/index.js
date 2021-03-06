import React, {createContext} from 'react';

export const UserContext=createContext('hi');

export const UserStateProvider = props => {

	const [user,setUser]=React.useState({});

	return (
		<UserContext.Provider value={[user,setUser]}>
			{props.children}
		</UserContext.Provider>
	);
};