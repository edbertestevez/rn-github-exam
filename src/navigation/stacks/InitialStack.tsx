import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../../views/containers/Splash';

const Stack = createStackNavigator();

export const InitialStack = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name={'SPLASH'} component={Splash} />
		</Stack.Navigator>
	);
};
