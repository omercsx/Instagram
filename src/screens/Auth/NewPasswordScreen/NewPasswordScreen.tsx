import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import FormInput from '../components/FormInput';
import CustomButton from '../components/CustomButton';

import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { NewPasswordNavigationProp } from '../../../types/navigation';

import { confirmResetPassword } from 'aws-amplify/auth';

type NewPasswordType = {
  username: string;
  code: string;
  password: string;
};

const NewPasswordScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { control, handleSubmit } = useForm<NewPasswordType>();

  const navigation = useNavigation<NewPasswordNavigationProp>();

  const onSubmitPressed = async ({
    username,
    code,
    password,
  }: NewPasswordType) => {
    try {
      setIsLoading(true);
      await confirmResetPassword({
        username,

        confirmationCode: code,
        newPassword: password,
      });
      Alert.alert('Success', 'Password reset successfully');
      navigation.navigate('Sign in');
    } catch (error) {
      Alert.alert('Oops!', (error as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  const onSignInPress = () => {
    navigation.navigate('Sign in');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>

        <FormInput
          placeholder="E-mail"
          name="username"
          control={control}
          rules={{ required: 'E-mail is required' }}
        />

        <FormInput
          placeholder="Code"
          name="code"
          control={control}
          rules={{ required: 'Code is required' }}
        />

        <FormInput
          placeholder="Enter your new password"
          name="password"
          control={control}
          secureTextEntry
          rules={{
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password should be at least 8 characters long',
            },
          }}
        />

        <CustomButton
          text={isLoading ? 'Loading...' : 'Submit'}
          onPress={handleSubmit(onSubmitPressed)}
        />

        <CustomButton
          text="Back to Sign in"
          onPress={onSignInPress}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
});

export default NewPasswordScreen;
