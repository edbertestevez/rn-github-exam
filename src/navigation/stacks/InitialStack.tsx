import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../../views/containers/Splash';
import { AppRoutes } from '../AppRoutes';

const Stack = createStackNavigator();

export const InitialStack = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name={AppRoutes.SPLASH} component={Splash} />
		</Stack.Navigator>
	);
};
