import { StyleSheet, Text, View } from 'react-native';
import React, { ReactNode } from 'react';
import { WHITE } from '@styles/colors';

type SizeLabelProp = {
  sizeDimension: number;
  children: ReactNode;
};

const SizeLabel = ({ sizeDimension, children }: SizeLabelProp) => {
  return (
    <View
      style={{
        width: sizeDimension,
        height: sizeDimension,
        borderRadius: sizeDimension / 2,
        backgroundColor: WHITE,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {children}
    </View>
  );
};

export default SizeLabel;
