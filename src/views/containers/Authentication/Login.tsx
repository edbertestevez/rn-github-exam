import React, {useState, useContext} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import {AuthContext} from '../../../context/AuthContext';
import {AppRoutes} from '../../../navigation/AppRoutes';
import * as RootNavigation from '../../../navigation/RootNavigation';
import styles from './styles/Login.style';

const Login: React.FC = () => {
  const {state, updateAuth} = useContext(AuthContext);
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const isInputValid = email && password;

  const loginUser = () => {
    updateAuth?.(true);
  };

  if (state && state.isLoggedIn) {
    RootNavigation.navigate(AppRoutes.REPO_LIST);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>REACT NATIVE EXAM</Text>
      <TextInput
        style={styles.input}
        value={email}
        keyboardType={'email-address'}
        placeholder={'Email'}
        onChangeText={(txt) => setEmail(txt)}
      />

      <TextInput
        style={styles.input}
        value={password}
        secureTextEntry={true}
        placeholder={'Password'}
        onChangeText={(txt) => setPassword(txt)}
      />

      <TouchableOpacity
        disabled={!isInputValid}
        activeOpacity={0.7}
        onPress={loginUser}
        style={[
          styles.loginButton,
          {
            opacity: isInputValid ? 1 : 0.75,
          },
        ]}>
        <Text style={styles.loginLabel}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
