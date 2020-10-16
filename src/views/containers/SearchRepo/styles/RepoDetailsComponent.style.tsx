import { StyleSheet } from 'react-native';
import { AppColors } from '../../../../constants/AppColors';
import { FontSize } from '../../../../constants/FontSize';

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: AppColors.WHITE,
		padding: 16
	},
	row: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	rowStats: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical: 12,
		borderBottomWidth: 1,
		borderBottomColor: AppColors.DARK_GREY
	},
	starsLabel: {
		backgroundColor: AppColors.LIGHT_GREY,
		paddingVertical: 12,
		paddingHorizontal: 8,
		fontSize: FontSize.NORMAL,
		borderWidth: 1,
		borderColor: AppColors.DARK_GREY,
		borderTopLeftRadius: 8,
		borderBottomLeftRadius: 8
	},
	starsValue: {
		backgroundColor: AppColors.WHITE,
		paddingVertical: 12,
		paddingHorizontal: 8,
		fontSize: FontSize.NORMAL,
		borderWidth: 1,
		borderLeftWidth: 0,
		borderColor: AppColors.DARK_GREY,
		borderTopRightRadius: 8,
		borderBottomRightRadius: 8
	},
	full_name: {
		fontSize: FontSize.LARGE,
		color: AppColors.BLUE,
		fontWeight: 'bold'
	},
	redirectButton: {
		backgroundColor: AppColors.GREEN,
		borderColor: AppColors.LIGHT_GREY,
		borderWidth: 1,
		paddingVertical: 12,
		paddingHorizontal: 32,
		borderRadius: 8,
		marginLeft: 12
	},
	buttonLabel: {
		fontSize: FontSize.NORMAL,
		color: AppColors.WHITE
	}
});
