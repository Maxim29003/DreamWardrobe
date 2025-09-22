import { View } from 'react-native';
import React from 'react';
import { Colors } from '@styles/colors';
import UIText from '@ui/Text/UIText';

type SizeLabelProps = {
  sizeDimension: number;
  sizeValue: string;
  isSelected?: boolean;
};

const SizeLabel = ({
  sizeDimension,
  isSelected = false,
  sizeValue,
}: SizeLabelProps) => {
  return (
    <View
      style={{
        width: sizeDimension,
        height: sizeDimension,
        borderRadius: sizeDimension / 2,
        backgroundColor: Colors.SURFACE,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <UIText
        variant="bodyMedium"
        color={isSelected ? Colors.PRIMARY : Colors.TEXT_PRIMARY}
      >
        {sizeValue}
      </UIText>
    </View>
  );
};

export default SizeLabel;
