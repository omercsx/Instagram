import React from 'react';
import styles from './styles';
import {View, Image, Text} from 'react-native';

import colors from '../../theme/colors';

import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

const FeedPost = () => {
  return (
    <View style={styles.post}>
      <View style={styles.header}>
        <Image
          source={{
            uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
          }}
          style={styles.userAvatar}
        />
        <Text style={styles.userName}>username</Text>
        <Entypo
          name="dots-three-horizontal"
          size={16}
          color="gray"
          style={styles.threeDots}
        />
      </View>

      <Image
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
        }}
        style={styles.image}
      />

      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <AntDesign
            name={'hearto'}
            size={24}
            style={styles.icon}
            color={colors.black}
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
            style={{marginLeft: 'auto'}}
            color={colors.black}
          />
        </View>
        <Text style={styles.text}>
          Liked by <Text style={styles.bold}>bla bla</Text> and{' '}
          <Text style={styles.bold}>66 others</Text>
        </Text>

        {/* Post description */}
        <Text style={styles.text}>
          <Text style={styles.bold}>omercs</Text> Lorem ipsum dolor sit amet
          consectetur adipisicing elit.
        </Text>

        {/* Post comments */}
        <Text style={{color: colors.lightgrey}}>View all 100 comments</Text>
        <View style={styles.comment}>
          <Text style={styles.commentText}>
            <Text style={styles.bold}>omercs</Text> Lorem ipsum dolor sit amet
            consectetur adipisicing elit.
          </Text>
          <AntDesign name="hearto" size={16} color={colors.black} />
        </View>

        {/* Post date */}
        <Text style={{color: colors.lightgrey}}>1 day ago</Text>
      </View>
    </View>
  );
};

export default FeedPost;
