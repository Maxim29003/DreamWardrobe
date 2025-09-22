import { StyleProp, TextInput, TextInputFocusEvent, TextStyle } from 'react-native';
import React from 'react';
import { isIPhone } from '@utils/platform';
import { styles } from './styles';
import { Colors } from '@styles/colors';

type InputBaseProp = {
  type?: 'password';
  value?: string | undefined;
  placeholder?: string | undefined;
  onChangeText?: ((text: string) => void) | undefined;
  style?: StyleProp<TextStyle> | undefined;
    onBlur?: ((e: TextInputFocusEvent) => void) | undefined;
};

const InputBase = ({
  type,
  value,
  onChangeText,
  placeholder,
  style,
  onBlur,
}: InputBaseProp) => {
  return (
    <TextInput
      secureTextEntry={type === 'password'}
      autoCapitalize="none" 
      value={value}
      placeholder={placeholder}
      onChangeText={onChangeText}
      style={[styles.inputStyle, isIPhone && styles.inputIPhone, style]}
      placeholderTextColor={Colors.TEXT_INPUT}
      onBlur ={onBlur}
    />
  );
};

export default InputBase;
