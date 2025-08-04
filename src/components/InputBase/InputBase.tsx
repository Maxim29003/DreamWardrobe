import { StyleProp, TextInput, TextStyle } from 'react-native';
import React from 'react';
import { isIPhone } from '@utils/platform';
import { styles } from './styles';
import { FONT_COLOR_SECONDARY } from '@styles/colors';

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
      placeholderTextColor={FONT_COLOR_SECONDARY}
    />
  );
};

export default InputBase;
