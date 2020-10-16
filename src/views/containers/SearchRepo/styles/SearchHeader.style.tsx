import { StyleSheet } from 'react-native';
import { AppColors } from '../../../../constants/AppColors';
import { FontSize } from '../../../../constants/FontSize';

export default StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: AppColors.PRIMARY,
    flexDirection: 'row',
    alignItems: 'center'
  },
  searchInput: {
    flex: 1,
    fontSize: FontSize.NORMAL,
    color: AppColors.WHITE,
    backgroundColor: AppColors.DARK_GREY,
    margin: 8,
    borderRadius: 8,
    paddingHorizontal: 16
  }
});
