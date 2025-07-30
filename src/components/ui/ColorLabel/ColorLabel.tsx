import { View } from 'react-native'
import React from 'react'

type ColorLabelProp = {
  size: number;
  color: string;
};

const ColorLabel = ({size, color}: ColorLabelProp) => {
  return (
    <View style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: color
    }}/>
  )
}

export default ColorLabel

