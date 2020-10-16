import React, {useContext} from 'react';
import { View, TextInput } from 'react-native';
import { AppColors } from '../../../constants/AppColors';
import { RepoContext } from '../../../context/RepoContext';
import styles from './styles/SearchHeader.style';

const SearchHeader: React.FC = () => {
  let { state, updateSearch } = useContext(RepoContext);

  return (
    <View style={styles.container}>
      <TextInput
        value={state?.searchText}
        onChangeText={(search: string) => updateSearch?.(search)}
        style={styles.searchInput}
        placeholder="Search Github Repository. . ."
        placeholderTextColor={AppColors.LIGHT_GREY}
      />
    </View>
  );
};

export default SearchHeader;

