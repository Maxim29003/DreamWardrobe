import {
  KeyboardAvoidingView,
  ScrollView,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native';
import React, { ReactNode } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '@styles/colors';
import { isIPhone } from '@utils/platform';

type MainContainerProps = {
  children: ReactNode;
  style?: StyleProp<ViewStyle> | undefined;
  scrollable?: boolean;
  keyboardAware?: boolean;
  noBottomPadding?: boolean;
};

const MainContainer = ({
  children,
  style,
  scrollable = false,
  keyboardAware = false,
  noBottomPadding = false,
}: MainContainerProps) => {
  const insets = useSafeAreaInsets();

  const content = (
    <View
      style={[
        {
          paddingTop: insets.top,
          paddingBottom: noBottomPadding ? 0 : insets.bottom,
          paddingLeft: insets.left + 30,
          paddingRight: insets.right + 30,
          flex: 1,
        },
        style,
      ]}
    >
      {children}
    </View>
  );

  const withScroll = scrollable ? (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
    >
      {content}
    </ScrollView>
  ) : (
    content
  );

  const withKeyboard = keyboardAware ? (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={isIPhone ? 'padding' : 'height'}
    >
      {withScroll}
    </KeyboardAvoidingView>
  ) : (
    withScroll
  );

  return (
    <LinearGradient
      colors={[
        Colors.BACKGROUND_GRADIENT_START,
        Colors.BACKGROUND_GRADIENT_END,
      ]}
      style={{ flex: 1 }}
    >
      {withKeyboard}
    </LinearGradient>
  );
};

export default MainContainer;
