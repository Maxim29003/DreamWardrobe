import { StyleSheet, View } from 'react-native';
import React, { ReactNode } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';

type MainContainerProps = {
  children: ReactNode;
};

const MainContainer = ({ children }: MainContainerProps) => {
  const insets = useSafeAreaInsets();
  return (
    <LinearGradient
      colors={['#FDF0F3', '#FFFBFC']}
      style={styles.linearGradient}
    >
      <View
        style={{
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left + 30,
          paddingRight: insets.right + 30,
        }}
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
