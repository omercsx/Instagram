import type { IPost } from '../Models';

export const post: IPost = {
  id: '1',
  createdAt: '19 December 2021',
  image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic repellendus unde blanditiis. Eos fugiat dolorem ea fugit aut sapiente corrupti autem dolores deleniti architecto, omnis, amet unde dignissimos quam minima?',
  user: {
    id: '1',
    name: 'Omer',
    image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
    username: 'omercs',
  },
  nofComments: 11,
  nofLikes: 33,
  comments: [
    {
      id: '1',
      comment: 'Hello there',
      user: {
        id: '1',
        name: 'Omer',
        image:
          'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
        username: 'omercs',
      },
    },
    {
      id: '2',
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. H',
      user: {
        id: '2',
        name: 'John',
        image:
          'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/2.jpg',
        username: 'john123',
      },
    },
  ],
};
