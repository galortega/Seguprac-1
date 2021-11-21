import React from 'react';
import Navigator from './src/navigation';
import { UserStateProvider } from './src/user_context';

const App = () => {
	return (
		<UserStateProvider>
			<Navigator />
		</UserStateProvider>
	);
};

export default App;