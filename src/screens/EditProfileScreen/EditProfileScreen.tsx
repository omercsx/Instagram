import React from 'react';
import { Button, Image, StyleSheet, View } from 'react-native';
import user from '../../assets/data/user.json';
import CustomInput from './CustomInput';

const EditProfileScreen = () => {
  return (
    <View style={styles.page}>
      <Image source={{ uri: user.image }} style={styles.avatar} />
      <Button
        title="Change profile photo"
        onPress={() => console.log('Change')}
      />
      <CustomInput label="Name" />
      <CustomInput label="Username" />
      <CustomInput label="Website" />
      <CustomInput label="Bio" multiline />
      <Button title="Submit" onPress={() => console.log('Submit')} />
    </View>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  page: {
    alignItems: 'center',
    padding: 10,
  },
  avatar: {
    width: 100,
    aspectRatio: 1,
    borderRadius: 50,
  },
});
