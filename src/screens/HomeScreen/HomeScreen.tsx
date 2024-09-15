import { FlatList } from 'react-native';
import React from 'react';
import posts from '../../assets/data/posts.json';
import FeedPost from '../../components/FeedPost';

const HomeScreen = () => {
  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => <FeedPost post={item} />} // {item, index}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default HomeScreen;
