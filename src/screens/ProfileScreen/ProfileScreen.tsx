import React from 'react';
import { View, Text, Image } from 'react-native';

import user from '../../assets/data/user.json';
import styles from './styles';
import Button from '../../components/Button';

const ProfileScreen = () => {
  return (
    <View style={styles.root}>
      <View style={styles.headerRow}>
        <Image source={{ uri: user.image }} style={styles.avatar} />
        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>{user.posts.length}</Text>
          <Text style={styles.numberLabel}>Posts</Text>
        </View>

        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>{121}</Text>
          <Text style={styles.numberLabel}>Followers</Text>
        </View>

        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>100</Text>
          <Text style={styles.numberLabel}>Following</Text>
        </View>
      </View>

      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.bio}>{user.bio}</Text>

      <View style={styles.buttonContainer}>
        <Button text="Edit Profile" onPress={() => {}} />
        <Button text="Another Button" onPress={() => {}} />
      </View>
    </View>
  );
};

export default ProfileScreen;
