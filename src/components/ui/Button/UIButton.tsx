import {
  StyleProp,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import React, { useMemo } from 'react';
import { styles } from './styles';
import UIText from '@ui/Text/UIText';
import { Colors } from '@styles/colors';

type UIButtonProps = TouchableOpacityProps & {
  text: string;
  style?: StyleProp<ViewStyle> | undefined;
  variant?: 'primary' | 'secondary';
};

const UIButton = ({
  text,
  style,
  variant = 'primary',
  ...props
}: UIButtonProps) => {
  const textColor = useMemo(() => {
    return variant === 'primary' ? Colors.ON_PRIMARY : Colors.TEXT_PRIMARY;
  }, [variant]);

  const textVariant = useMemo(() => {
    return variant === 'primary' ? 'button' : 'bodyMedium';
  }, [variant]);

  return (
    <TouchableOpacity
      style={[variant === 'primary' && styles.button, style]}
      {...props}
    >
      <UIText variant={textVariant} color={textColor}>
        {text}
      </UIText>
    </TouchableOpacity>
  );
};

export default UIButton;
