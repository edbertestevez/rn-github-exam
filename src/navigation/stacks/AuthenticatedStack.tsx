import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AppRoutes } from '../AppRoutes';
import RepoList from '../../views/containers/SearchRepo/RepoList';
import RepoDetailsComponent from '../../views/containers/SearchRepo/RepoDetailsComponent';
import { AppColors } from '../../constants/AppColors';

const Stack = createStackNavigator();

export const AuthenticatedStack = () => {
	return (
		<Stack.Navigator initialRouteName={AppRoutes.REPO_LIST}>
			<Stack.Screen options={{ headerShown: false }} name={AppRoutes.REPO_LIST} component={RepoList} />
			<Stack.Screen
				options={{
					headerTitle: 'Details',
					headerStyle: { backgroundColor: AppColors.PRIMARY },
					headerTintColor: AppColors.WHITE
				}}
				name={AppRoutes.REPO_VIEW}
				component={RepoDetailsComponent}
			/>
		</Stack.Navigator>
	);
};
