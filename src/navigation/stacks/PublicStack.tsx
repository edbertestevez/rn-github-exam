import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AppRoutes } from '../AppRoutes';

import Login from '../../views/containers/Authentication/Login';

const Stack = createStackNavigator();

export const PublicStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen options={{ headerShown: false }} name={AppRoutes.LOGIN} component={Login} />
		</Stack.Navigator>
	);
};
