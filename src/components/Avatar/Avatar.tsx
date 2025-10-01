import { View } from 'react-native';
import React from 'react';
import UserSelectors from '@store/selectors/user.selectors';
import { useAppSelector } from '@hooks/useAppSelector';
import { Colors } from '@styles/colors';
import UIText from '@ui/Text/UIText';


type AvatarProp = {
  size: number;
};

const Avatar = ({ size }: AvatarProp) => {
  const user = useAppSelector(UserSelectors.user);
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: Colors.SURFACE,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <UIText color={Colors.PRIMARY}>
           {user?.name?.[0]?.toUpperCase() ?? ""}
        </UIText>
       
      </View>
  );
};

export default Avatar;
