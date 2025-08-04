import {
  StyleProp,
  Text,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import React from 'react';
import Button from '@ui/Button/Button';
import { styles } from './styles';

type PrimaryButtonProps = TouchableOpacityProps & {
  text: string;
  style?: StyleProp<ViewStyle> | undefined;
};

const PrimaryButton = ({ text, style, ...props }: PrimaryButtonProps) => {
  return (
    <Button style={[styles.button, style]} {...props}>
      <Text style={styles.buttonText}>{text}</Text>
    </Button>
  );
};

export default PrimaryButton;
