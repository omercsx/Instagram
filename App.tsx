/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import FeedPost from './src/components/FeedPost';

function App(): React.JSX.Element {
  return (
    <ScrollView style={styles.container}>
      <FeedPost />
      <FeedPost />
      <FeedPost />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 50,
  },
});

export default App;
