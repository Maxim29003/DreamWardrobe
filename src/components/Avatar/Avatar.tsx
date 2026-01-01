import { View } from 'react-native';
import React from 'react';
import { Colors } from '@styles/colors';
import UIText from '@ui/Text/UIText';

type AvatarProp = {
  size: number;
  icon?: React.ReactNode;
  name?: string;
};

const Avatar = ({ size, icon, name }: AvatarProp) => {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: Colors.SURFACE,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {icon ? (
        icon
      ) : (
        <UIText color={Colors.PRIMARY}>
          {name?.[0]?.toUpperCase() ?? ''}
        </UIText>
      )}
    </View>
  );
};

export default Avatar;
