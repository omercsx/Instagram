import React from 'react';
import user from '../../assets/data/user.json';
import ProfileHeader from './ProfileHeader';
import FeedGridView from '../../components/FeedGridView';
import type { IPost } from '../../Models';

const ProfileScreen = () => {
  return (
    <FeedGridView
      data={user.posts as IPost[]}
      ListHeaderComponent={ProfileHeader}
    />
  );
};

export default ProfileScreen;
