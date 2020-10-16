import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './RootNavigation';
import { InitialStack } from './stacks/InitialStack';

const AppNavigation = () => {
	return (
		<NavigationContainer ref={navigationRef}>
			<InitialStack/>
		</NavigationContainer>
	);
};

export default AppNavigation;
