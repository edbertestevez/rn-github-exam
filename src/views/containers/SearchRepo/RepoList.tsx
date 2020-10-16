import React, { useContext } from 'react';
import { Text, Button } from 'react-native';
import { AuthContext } from '../../../context/AuthContext';
import SearchHeader from '../../components/SearchHeader';

const RepoList: React.FC = () => {
  let { updateAuth } = useContext(AuthContext);

  return (
    <React.Fragment>
      <SearchHeader/>
      <Text>Authenticated route</Text>
      <Button title={"LOGOUT"} onPress={()=>updateAuth?.(false)}/>
    </React.Fragment>
  );
};

export default RepoList;