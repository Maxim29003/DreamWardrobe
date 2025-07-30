import { TouchableOpacityProps, TouchableOpacity } from 'react-native';
import React from 'react';

type ButtonProp = TouchableOpacityProps;

const Button = ({ children, ...props }: ButtonProp) => {
  return <TouchableOpacity {...props}>{children}</TouchableOpacity>;
};

export default Button;
