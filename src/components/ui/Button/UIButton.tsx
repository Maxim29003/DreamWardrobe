import {
  ActivityIndicator,
  StyleProp,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import React, { useMemo } from 'react';
import { styles } from './styles';
import UIText from '@ui/Text/UIText';
import { Colors } from '@styles/colors';
import Spacer from '@components/Spacer/Spacer';

type UIButtonProps = TouchableOpacityProps & {
  text: string;
  style?: StyleProp<ViewStyle> | undefined;
  variant?: 'primary' | 'secondary' | 'disabled';
  activeIndicator?: boolean;
};

const UIButton = ({
  text,
  style,
  variant = 'primary',
  activeIndicator = false,
  ...props
}: UIButtonProps) => {
  const textColor = useMemo(() => {
    return variant === 'primary' ? Colors.ON_PRIMARY : Colors.TEXT_PRIMARY;
  }, [variant]);

  const textVariant = useMemo(() => {
    return variant === 'primary' ? 'button' : 'bodyMedium';
  }, [variant]);

  const buttonStyle = useMemo(() => {
    switch (variant) {
      case 'primary':
        return [styles.button];
      case 'disabled':
        return [styles.button, { backgroundColor: Colors.TEXT_INPUT }];
      case 'secondary':
      default:
        return [{}];
    }
  }, [variant]);

  return (
    <TouchableOpacity
      disabled={variant === 'disabled'}
      style={[...buttonStyle, style]}
      {...props}
    >
      <UIText variant={textVariant} color={textColor}>
        {text}
      </UIText>
      {activeIndicator && (
        <>
          <Spacer width={12} />
          <ActivityIndicator color={Colors.ON_PRIMARY} />
        </>
      )}
    </TouchableOpacity>
  );
};

export default UIButton;
