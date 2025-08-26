import { StyleProp, TouchableOpacityProps, ViewStyle } from 'react-native';
import React from 'react';
import Button from '@ui/Button/Button';
import { HeartFilledIcon, HeartOutlineIcon } from '@constants/Icons/Icons';
import { PRIMARY } from '@styles/colors';
import { styles } from './styles';

type LikeButtonProps = {
  like: boolean;
  style?: StyleProp<ViewStyle> | undefined;
} & TouchableOpacityProps;

const LikeButton = ({ style, like, ...props }: LikeButtonProps) => {
  return (
    <Button style={[styles.button, style]} {...props}>
      {like ? (
        <HeartFilledIcon fill={PRIMARY} width={20} height={20} />
      ) : (
        <HeartOutlineIcon fill={PRIMARY} width={20} height={20} />
      )}
    </Button>
  );
};

export default LikeButton;
