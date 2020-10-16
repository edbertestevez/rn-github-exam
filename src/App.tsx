import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import AppNavigation from './navigation/AppNavigation';

const App: React.FC = () => {
	return (
    <SafeAreaView style={styles.appContainer}>
      <AppNavigation />
    </SafeAreaView>
	);
};

export default App;

const styles = StyleSheet.create({
  appContainer:{
    flex: 1
  }
});