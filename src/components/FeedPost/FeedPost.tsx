import React, { useState } from 'react';
import styles from './styles';
import { View, Image, Text } from 'react-native';

import colors from '../../theme/colors';
import Comment from '../Comment';
import type { IPost } from '../../Models';

import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface FeedPostProps {
  post: IPost;
}

const FeedPost = ({ post }: FeedPostProps) => {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const toggleDescriptionExpanded = () => {
    setIsDescriptionExpanded(v => !v);
  };

  const toggleLiked = () => {
    setIsLiked(v => !v);
  };

  const {
    user,
    image,
    description,
    createdAt,
    nofLikes,
    nofComments,
    comments,
  } = post;
  return (
    <View style={styles.post}>
      <View style={styles.header}>
        <Image
          source={{
            uri: user.image,
          }}
          style={styles.userAvatar}
        />
        <Text style={styles.userName}>{user.username}</Text>
        <Entypo
          name="dots-three-horizontal"
          size={16}
          color="gray"
          style={styles.threeDots}
        />
      </View>

      <Image
        source={{
          uri: image,
        }}
        style={styles.image}
      />

      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <AntDesign
            name={isLiked ? 'heart' : 'hearto'}
            size={24}
            style={styles.icon}
            color={isLiked ? colors.accent : colors.black}
            onPress={toggleLiked}
          />
          <Ionicons
            name="chatbubble-outline"
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name="send"
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name="bookmark"
            size={24}
            style={{ marginLeft: 'auto' }}
            color={colors.black}
          />
        </View>
        <Text style={styles.text}>
          Liked by <Text style={styles.bold}>{user.username}</Text> and{' '}
          <Text style={styles.bold}>{nofLikes} others</Text>
        </Text>

        {/* Post description */}
        <Text style={styles.text} numberOfLines={isDescriptionExpanded ? 0 : 2}>
          <Text style={styles.bold}>{user.username}</Text> {description}
        </Text>
        <Text
          onPress={toggleDescriptionExpanded}
          style={{ color: colors.primary }}>
          {isDescriptionExpanded ? 'less' : 'more'}
        </Text>

        {/* Post comments */}
        <Text style={{ color: colors.lightgrey }}>
          View all {nofComments} comments
        </Text>

        {comments.map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))}

        {/* Post date */}
        <Text style={{ color: colors.lightgrey }}>{createdAt}</Text>
      </View>
    </View>
  );
};

export default FeedPost;
