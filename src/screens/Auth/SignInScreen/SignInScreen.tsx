import React, { useState } from 'react';
import {
  View,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  Alert,
} from 'react-native';
import Logo from '../../../assets/images/omercslogo.png';
import FormInput from '../components/FormInput';
import CustomButton from '../components/CustomButton';
import SocialSignInButtons from '../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { SignInNavigationProp } from '../../../types/navigation';

import { signIn } from 'aws-amplify/auth';
import { useEffect } from 'react';
import { getCurrentUser } from 'aws-amplify/auth';

type SignInData = {
  username: string;
  password: string;
};

const SignInScreen = () => {
  const { height } = useWindowDimensions();
  const navigation = useNavigation<SignInNavigationProp>();
  const [isLoading, setIsLoading] = useState(false);

  const { control, handleSubmit, reset } = useForm<SignInData>();

  useEffect(() => {
    const checkUser = async () => {
      try {
        const user = await getCurrentUser();
        if (user) {
          navigation.navigate('Home' as never);
        }
      } catch (error) {
        // User is not signed in
        console.log('User is not signed in');
      }
    };
    checkUser();
  }, [navigation]);

  const onSignInPressed = async ({ username, password }: SignInData) => {
    if (isLoading) {
      return;
    }
    setIsLoading(true);
    try {
      const { isSignedIn } = await signIn({ username, password });

      // TODO: Save user data to Context

      if (isSignedIn) {
        navigation.navigate('Home' as never);

        // clear form inputs
        reset({ username: '', password: '' });
      }
    } catch (error) {
      Alert.alert('Oops!', (error as Error).message || 'Something went wrong');
    } finally {
      setIsLoading(false);
    }

    // validate user

    // navigation.navigate('Home');
  };

  const onForgotPasswordPressed = () => {
    navigation.navigate('Forgot password');
  };

  const onSignUpPress = () => {
    navigation.navigate('Sign up');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, { height: height * 0.3 }]}
          resizeMode="contain"
        />

        <FormInput
          name="username"
          placeholder="Username"
          control={control}
          rules={{ required: 'Username is required' }}
        />

        <FormInput
          name="password"
          placeholder="Password"
          secureTextEntry
          control={control}
          rules={{
            required: 'Password is required',
            minLength: {
              value: 3,
              message: 'Password should be minimum 3 characters long',
            },
          }}
        />

        <CustomButton
          text={isLoading ? 'Loading...' : 'Sign In'}
          onPress={handleSubmit(onSignInPressed)}
        />

        <CustomButton
          text="Forgot password?"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />

        <SocialSignInButtons />

        <CustomButton
          text="Don't have an account? Create one"
          onPress={onSignUpPress}
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
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },
});

export default SignInScreen;
