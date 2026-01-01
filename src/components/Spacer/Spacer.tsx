import { View } from 'react-native';
import React from 'react';

type SpaserProps = {
  width?: number;
  height?: number;
};

const Spacer = ({height, width}: SpaserProps) => {
  return <View style={{width, height}}/>;
};

export default Spacer;

