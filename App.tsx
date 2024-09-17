/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import { View, StyleSheet } from 'react-native';
// import CommentsScreen from './src/screens/CommentsScreen';
// import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';

function App(): React.JSX.Element {
  return (
    <View style={styles.app}>
      <ProfileScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    marginVertical: 50,
  },
});

export default App;
