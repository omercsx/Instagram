/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import FeedPost from './src/components/FeedPost';
import { post } from './src/assets/post';

function App(): React.JSX.Element {
  return (
    <ScrollView style={styles.app}>
      <FeedPost post={post} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    marginVertical: 50,
  },
});

export default App;
