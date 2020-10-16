import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './RootNavigation';
import { InitialStack } from './stacks/InitialStack';
import { PublicStack } from './stacks/PublicStack';

const AppNavigation = () => {
	const [ isAppLoading, setIsAppLoading ] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setIsAppLoading(false);
		}, 2000);
	}, []);

	return (
		<NavigationContainer ref={navigationRef}>
			{isAppLoading ? (
				<InitialStack />
			) : (
				<PublicStack />
			)}
		</NavigationContainer>
	);
};

export default AppNavigation;
