import React, { useState } from 'react';
import { View, Text } from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

import colors from '../../theme/colors';
import styles from './styles';

import type { IComment } from '../../Models';
import DoublePressable from '../DoublePressable';

interface CommentProps {
  comment: IComment;
}

const Comment = ({ comment }: CommentProps) => {
  const { user, comment: commentBody } = comment;
  const [isLiked, setIsLiked] = useState(false);

  const toggleLiked = () => {
    setIsLiked(v => !v);
  };

  return (
    <DoublePressable onDoublePress={toggleLiked} prevLike={isLiked}>
      <View style={styles.comment}>
        <Text style={styles.commentText}>
          <Text style={styles.bold}>{user.username}</Text> {commentBody}
        </Text>
        <AntDesign
          name={isLiked ? 'heart' : 'hearto'}
          size={16}
          color={isLiked ? colors.accent : colors.black}
          onPress={toggleLiked}
        />
      </View>
    </DoublePressable>
  );
};

export default Comment;
