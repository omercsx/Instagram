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
import PostUploadScreen from './src/screens/PostUploadScreen';
import { NavigationContainer } from '@react-navigation/native';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <View style={styles.app}>
        <PostUploadScreen />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    marginVertical: 50,
  },
});

export default App;
