import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import PostUploadScreen from '../screens/PostUploadScreen';
import HomeStackNavigator from './HomeStackNavigator';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from '../theme/colors';

const Tab = createBottomTabNavigator();

const HomeIcon = ({ color, size }: { color: string; size: number }) => (
  <MaterialIcons name="home" size={size} color={color} />
);

const SearchIcon = ({ color, size }: { color: string; size: number }) => (
  <MaterialIcons name="search" size={size} color={color} />
);

const UploadIcon = ({ color, size }: { color: string; size: number }) => (
  <MaterialCommunityIcons
    name="plus-circle-outline"
    size={size}
    color={color}
  />
);

const NotificationsIcon = ({
  color,
  size,
}: {
  color: string;
  size: number;
}) => <MaterialCommunityIcons name="heart-outline" size={size} color={color} />;

const ProfileIcon = ({ color, size }: { color: string; size: number }) => (
  <FontAwesome name="user-circle-o" size={size} color={color} />
);

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.black,
        tabBarInactiveTintColor: colors.grey,
      }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStackNavigator}
        options={{ tabBarIcon: HomeIcon, headerShown: false }}
      />
      <Tab.Screen
        name="Search"
        component={HomeScreen}
        options={{ tabBarIcon: SearchIcon }}
      />
      <Tab.Screen
        name="Upload"
        component={PostUploadScreen}
        options={{ tabBarIcon: UploadIcon, headerShown: false }}
      />
      <Tab.Screen
        name="Notifications"
        component={ProfileScreen}
        options={{ tabBarIcon: NotificationsIcon }}
      />
      <Tab.Screen
        name="MyProfile"
        component={ProfileScreen}
        options={{ tabBarIcon: ProfileIcon }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
