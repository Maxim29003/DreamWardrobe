import { Image } from 'react-native';
import React from 'react';

type AvatarProp = {
  size: number;
  uri: string;
};

const Avatar = ({ size, uri }: AvatarProp) => {
  return (
    <Image
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
      }}
      source={{ uri: uri }}
    />
  );
};

export default Avatar;
