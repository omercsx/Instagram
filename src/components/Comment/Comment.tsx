import React from 'react';
import { View, Text } from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

import colors from '../../theme/colors';
import styles from './styles';

import type { IComment } from '../../Models';

interface CommentProps {
  comment: IComment;
}

const Comment = ({ comment }: CommentProps) => {
  const { user, comment: commentBody } = comment;
  return (
    <View style={styles.comment}>
      <Text style={styles.commentText}>
        <Text style={styles.bold}>{user.username}</Text>
        {commentBody}
      </Text>
      <AntDesign name="hearto" size={16} color={colors.black} />
    </View>
  );
};

export default Comment;
