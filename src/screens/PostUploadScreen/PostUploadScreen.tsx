import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const PostUploadScreen = () => {
  return (
    <View style={styles.page}>
      <Text>PostUploadScreen</Text>
    </View>
  );
};

export default PostUploadScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
