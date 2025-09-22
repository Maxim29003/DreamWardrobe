import { StyleProp, Text, TextStyle } from 'react-native';
import React from 'react';
import { FontSize, Typography } from '@styles/typography';
import { Colors } from '@styles/colors';

type UITextProps = {
  variant?: FontSize;
  color?: Colors;
  style?: StyleProp<TextStyle>;
  children: React.ReactNode;
};

const UIText = ({
  variant = 'heading',
  color = Colors.TEXT_PRIMARY,
  style,
  children,
}: UITextProps) => {
  return <Text style={[Typography[variant], { color }, style]}>{children}</Text>;
};

export default UIText;