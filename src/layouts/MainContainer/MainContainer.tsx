import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import React, { ReactNode } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import { LINEAR_GRADIENT_END, LINEAR_GRADIENT_START } from '@styles/colors';

type MainContainerProps = {
  children: ReactNode;
  style?: StyleProp<ViewStyle> | undefined;
};

const MainContainer = ({ children, style }: MainContainerProps) => {
  const insets = useSafeAreaInsets();
  return (
    <LinearGradient
      colors={[LINEAR_GRADIENT_START, LINEAR_GRADIENT_END]}
      style={styles.linearGradient}
    >
      <View
        style={[{
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left + 30,
          paddingRight: insets.right + 30,
          flex:1,
        }, style]}
      >
        {children}
      </View>
    </LinearGradient>
  );
};

export default MainContainer;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
});
