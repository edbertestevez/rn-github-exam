import {StyleSheet} from 'react-native';

const flexStyles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  flexCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  col: {
    flexDirection: 'column',
  },
  colCenter: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default flexStyles;
