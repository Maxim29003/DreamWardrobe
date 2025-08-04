import { TouchableOpacityProps } from 'react-native';
import React from 'react';
import Button from '@ui/Button/Button';
import { HeartOutlineIcon } from '@constants/Icons/Icons';
import { PRIMARY } from '@styles/colors';
import { styles } from './styles';

const LikeButton = (props: TouchableOpacityProps) => {
  return (
    <Button style={styles.button} {...props}>
      <HeartOutlineIcon fill={PRIMARY} width={20} height={20} />
    </Button>
  );
};

export default LikeButton;
