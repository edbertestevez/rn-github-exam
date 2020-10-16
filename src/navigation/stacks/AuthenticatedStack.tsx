import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AppRoutes } from '../AppRoutes';
import RepoList from '../../views/containers/SearchRepo/RepoList';

const Stack = createStackNavigator();

export const AuthenticatedStack = () => {
	return (
		<Stack.Navigator initialRouteName={AppRoutes.REPO_LIST}>
			<Stack.Screen
				options={{ headerShown: false }}
				name={AppRoutes.REPO_LIST}
				component={RepoList}
			/>
		</Stack.Navigator>
	);
};
