import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {AuthProvider} from './context/AuthContext';
import {RepoProvider} from './context/RepoContext';
import AppNavigation from './navigation/AppNavigation';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <RepoProvider>
        <SafeAreaView style={styles.appContainer}>
          <AppNavigation />
        </SafeAreaView>
      </RepoProvider>
    </AuthProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});
