import React from 'react';
import { Button, Image, StyleSheet, View } from 'react-native';
import user from '../../assets/data/user.json';
import CustomInput from './CustomInput';
import { useForm } from 'react-hook-form';
import { IEditableUser } from './CustomInput';

const URL_REGEX =
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

const EditProfileScreen = () => {
  const { control, handleSubmit } = useForm<IEditableUser>({
    defaultValues: {
      name: user.name,
      username: user.username,
      website: user.website ?? '',
      bio: user.bio,
    },
  });

  const onSubmit = (data: IEditableUser) => {
    console.log(data);
  };
  return (
    <View style={styles.page}>
      <Image source={{ uri: user.image }} style={styles.avatar} />
      <Button
        title="Change profile photo"
        onPress={() => console.log('Change')}
      />
      <CustomInput
        label="Name"
        control={control}
        name="name"
        rules={{ required: 'required' }}
      />
      <CustomInput
        label="Username"
        control={control}
        name="username"
        rules={{
          required: 'required',
          minLength: {
            value: 3,
            message: 'Username must be at least 3 characters',
          },
        }}
      />
      <CustomInput
        label="Website"
        control={control}
        name="website"
        rules={{
          pattern: {
            value: URL_REGEX,
            message: 'Please enter a valid URL',
          },
        }}
      />
      <CustomInput label="Bio" control={control} name="bio" multiline />
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
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
