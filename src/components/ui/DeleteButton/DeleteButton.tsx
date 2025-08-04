import { TouchableOpacityProps } from 'react-native';
import React from 'react';
import Button from '@ui/Button/Button';

import { PRIMARY } from '@styles/colors';
import { DeleteIcon } from '@constants/Icons/Icons';

const DeleteButton = (props: TouchableOpacityProps) => {
  return (
    <Button {...props}>
      <DeleteIcon fill={PRIMARY} />
    </Button>
  );
};

export default DeleteButton;
