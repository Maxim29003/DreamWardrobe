import { View } from 'react-native';
import React, { ReactNode } from 'react';
import { styles } from './styles';

type HeaderProp = {
  children: ReactNode;
};

const Header = ({ children }: HeaderProp) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
};

export default Header;