import {StyleSheet, Dimensions} from 'react-native';
import {AppColors} from '../../../../constants/AppColors';
import {FontSize} from '../../../../constants/FontSize';

const defaultElementWidth = Dimensions.get('window').width - 60;
const defaultElementHeight = 60;
const defaultElementRadius = 10;

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.PRIMARY,
  },
  label: {
    fontSize: 26,
    color: AppColors.WHITE,
    marginBottom: 30,
  },
  input: {
    width: defaultElementWidth,
    height: defaultElementHeight,
    fontSize: FontSize.MEDIUM,
    backgroundColor: AppColors.WHITE,
    borderRadius: defaultElementRadius,
    paddingHorizontal: 12,
    marginBottom: 12,
  },
  loginButton: {
    width: defaultElementWidth,
    height: defaultElementHeight,
    borderRadius: defaultElementRadius,
    backgroundColor: AppColors.GREEN,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginLabel: {
    fontSize: FontSize.MEDIUM,
    color: AppColors.WHITE,
  },
});
