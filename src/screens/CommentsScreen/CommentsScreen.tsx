import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import comments from '../../assets/data/comments.json';
import Comment from '../../components/Comment';

const CommentsScreen = () => {
  return (
    <FlatList
      data={comments}
      renderItem={({ item }) => <Comment comment={item} includeDetails />}
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
