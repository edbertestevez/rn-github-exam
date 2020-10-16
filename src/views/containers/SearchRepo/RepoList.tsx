import React, { useContext } from 'react';
import { Text, Button } from 'react-native';
import { AuthContext } from '../../../context/AuthContext';

const RepoList: React.FC = () => {
  let { updateAuth } = useContext(AuthContext);

  return (
    <React.Fragment>
      <Text>Authenticated route</Text>
      <Button title={"LOGOUT"} onPress={()=>updateAuth?.(false)}/>
    </React.Fragment>
  );
};

export default RepoList;