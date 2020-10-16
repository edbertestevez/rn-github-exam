import React, {useContext} from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { AppColors } from '../../constants/AppColors';
import { FontSize } from '../../constants/FontSize';
import { RepoContext } from '../../context/RepoContext';

const SearchHeader: React.FC = () => {
  let { state, updateSearch } = useContext(RepoContext);

  return (
    <View style={styles.container}>
      <TextInput
        value={state?.searchText}
        onChangeText={search => updateSearch?.(search)}
        style={styles.searchInput}
        placeholder="Search Github Repository. . ."
        placeholderTextColor={AppColors.LIGHT_GREY}
      />
    </View>
  );
};

export default SearchHeader;

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: AppColors.PRIMARY
  },
  searchInput: {
    fontSize: FontSize.NORMAL,
    color: AppColors.WHITE,
    backgroundColor: AppColors.DARK_GREY,
    margin: 8,
    borderRadius: 8,
    paddingHorizontal: 16
  }
});
