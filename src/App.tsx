import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { AuthProvider } from './context/AuthContext';
import AppNavigation from './navigation/AppNavigation';

const App: React.FC = () => {
	return (
    <AuthProvider>
      <SafeAreaView style={styles.appContainer}>
        <AppNavigation />
      </SafeAreaView>
    </AuthProvider>
	);
};

export default App;

const styles = StyleSheet.create({
  appContainer:{
    flex: 1
  }
});