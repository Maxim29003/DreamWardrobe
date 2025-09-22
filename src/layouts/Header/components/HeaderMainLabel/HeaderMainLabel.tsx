import { View } from 'react-native';
import React from 'react';
import { GridIcon } from '@constants/Icons/Icons';
import { Colors } from '@styles/colors';
import { styles } from './styles';

const HeaderMainLabel = () => {
  return (
    <View style={styles.containerStyles}>
      <GridIcon fill={Colors.ICON_PRIMARY} />
    </View>
  );
};

export default HeaderMainLabel;
