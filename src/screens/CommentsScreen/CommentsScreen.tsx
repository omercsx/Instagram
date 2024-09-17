import React from 'react';
import { StyleSheet, Text, FlatList } from 'react-native';
import comments from '../../assets/data/comments.json';

const CommentsScreen = () => {
  return (
    <FlatList
      data={comments}
      renderItem={({ item }) => <Text>{item.comment}</Text>}
      style={styles.comments}
    />
  );
};

export default CommentsScreen;

const styles = StyleSheet.create({
  comments: {
    padding: 10,
  },
});
