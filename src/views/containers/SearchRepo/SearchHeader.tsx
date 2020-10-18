import React, {useContext} from 'react';
import {View, TextInput, Button} from 'react-native';
import {AppColors} from '../../../constants/AppColors';
import {AuthContext} from '../../../context/AuthContext';
import {RepoContext} from '../../../context/RepoContext';
import styles from './styles/SearchHeader.style';

const SearchHeader: React.FC = () => {
  let {state, updateSearch} = useContext(RepoContext);
  let {updateAuth} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <TextInput
        value={state?.searchText}
        onChangeText={(search: string) => updateSearch?.(search)}
        style={styles.searchInput}
        placeholder="Search Github Repository. . ."
        placeholderTextColor={AppColors.LIGHT_GREY}
      />
      <Button
        color={AppColors.PRIMARY}
        title={'LOGOUT'}
        onPress={() => updateAuth?.(false)}
      />
    </View>
  );
};

export default SearchHeader;
