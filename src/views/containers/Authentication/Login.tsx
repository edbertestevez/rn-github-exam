import React, { useState, useContext } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from './Login.style';

const Login = () => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const isInputValid = email && password;
  
  const loginUser = () => {
    /**Insert login logic */
  }

	return (
    <View style={styles.container}>
        <Text style={styles.label}>REACT NATIVE EXAM</Text>
        <TextInput
          style={styles.input}
          value={email}
          autoCompleteType={"email"}
          placeholder={"Email"}
          onChangeText={(txt) => setEmail(txt)}
        />

        <TextInput
          style={styles.input}
          value={password}
          autoCompleteType={"password"}
          placeholder={"Password"}
          onChangeText={(txt) => setPassword(txt)}
        />

        <TouchableOpacity 
          disabled={!isInputValid}
          activeOpacity={0.7}
          onPress={loginUser}
          style={[styles.loginButton, { 
            opacity: isInputValid ? 1 : 0.75
          }]}
        >
          <Text style={styles.loginLabel}>Login</Text>
        </TouchableOpacity>
    </View>
  );
};

export default Login;