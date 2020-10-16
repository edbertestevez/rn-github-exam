import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { AppColors } from '../../constants/AppColors';
import { FontSize } from '../../constants/FontSize';
import { IResultItem } from '../../context/RepoContext';

//Add other possible card interface
type Props = IResultItem;

const CardResult: React.FC<Props> = (props: Props) => {
	return (
		<TouchableOpacity onPress={()=>props.onItemPress(props)} activeOpacity={0.7} style={styles.container}>
			<Text style={styles.repo_name}>{props.full_name}</Text>
			<Text style={styles.description}>{props.description || 'No Description'}</Text>

			<View style={styles.row}>
				<View style={styles.row}>
					<View style={styles.indicator} />
					<Text style={styles.language}>{props.language}</Text>
				</View>
				<Text style={styles.stars}>{props.stargazers_count && `Stars: ${props.stargazers_count}`}</Text>
			</View>
		</TouchableOpacity>
	);
};

export default CardResult;

const styles = StyleSheet.create({
	container: {
		padding: 16,
		marginBottom: 8,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.23,
		shadowRadius: 2.62,
		elevation: 4,
		backgroundColor: AppColors.WHITE
	},
	repo_name: {
		color: AppColors.BLUE,
		fontSize: FontSize.MEDIUM,
		fontWeight: '700'
	},
	description: {
		fontSize: FontSize.NORMAL,
		marginVertical: 8
	},
	row: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	indicator: {
		width: 14,
		height: 14,
		borderRadius: 7,
		marginRight: 4,
		backgroundColor: AppColors.ORANGE
	},
	language: {
		fontSize: FontSize.SMALL
	},
	stars: {
		fontSize: FontSize.SMALL,
		marginLeft: 32
	}
});
