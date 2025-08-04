import { StyleProp, TextInput, TextStyle } from 'react-native';
import React from 'react';
import { isIPhone } from '@utils/platform';
import { styles } from './styles';

type InputBaseProp = {
  type?: 'password';
  value?: string | undefined;
  placeholder?: string | undefined;
  onChangeText?: ((text: string) => void) | undefined;
  style?: StyleProp<TextStyle> | undefined;
};

const InputBase = ({
  type,
  value,
  onChangeText,
  placeholder,
  style,
}: InputBaseProp) => {
  return (
    <TextInput
      secureTextEntry={type === 'password'}
      value={value}
      placeholder={placeholder}
      onChangeText={onChangeText}
      style={[styles.inputStyle, isIPhone && styles.inputIPhone, style]}
    />
  );
};

export default InputBase;
