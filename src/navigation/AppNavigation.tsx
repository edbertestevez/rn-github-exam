import React, { useState, useEffect, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './RootNavigation';
import { InitialStack } from './stacks/InitialStack';
import { PublicStack } from './stacks/PublicStack';
import { AuthContext } from '../context/AuthContext';
import { AuthenticatedStack } from './stacks/AuthenticatedStack';
import * as RootNavigation from './RootNavigation';

const AppNavigation = () => {
	let { state } = useContext(AuthContext);
	const [ isAppLoading, setIsAppLoading ] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setIsAppLoading(false);
		}, 2000);
	}, []);

	return (
		<NavigationContainer ref={navigationRef}>
			{isAppLoading ? (
				//Splash screen
				<InitialStack />
			) : 
			state && state.isLoggedIn ? (
				//Authenticated screens
				<AuthenticatedStack />
			) : (
				//Public screens
				<PublicStack />
			)}
		</NavigationContainer>
	);
};

export {
	RootNavigation
}

export default AppNavigation;
