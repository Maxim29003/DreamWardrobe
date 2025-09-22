import { StyleProp, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';
import React from 'react';
import { Colors } from '@styles/colors';

type UIIconButtonProps = {
  icon: React.ReactNode;
  onPress?: () => void;
  size?: number;
  variant?: 'otline' | 'filled';
  style?: StyleProp<ViewStyle> | undefined;
};

const UIIconButton = ({
  onPress,
  icon,
  variant = 'otline',
  size = 34,
  style,
}: UIIconButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        variant === 'filled' && {
          backgroundColor: Colors.SURFACE,
          width: size,
          height: size,
          borderRadius: size / 2,
          justifyContent: 'center',
          alignItems:"center",
        },style
      ]}
    >
      {icon}
    </TouchableOpacity>
  );
};

export default UIIconButton;

const styles = StyleSheet.create({});
