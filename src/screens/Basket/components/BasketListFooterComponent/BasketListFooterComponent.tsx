import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import UIText from '@ui/Text/UIText';
import { Colors } from '@styles/colors';
import { styles } from './styles';
import Spacer from '@components/Spacer/Spacer';
import UIButton from '@ui/Button/UIButton';

type BasketListFooterComponentProps = {
  totalPrice: number;
  count: number;
  showAlert: () => void;
};

const BasketListFooterComponent = ({
  totalPrice,
  count,
  showAlert,
}: BasketListFooterComponentProps) => {
  return (
    <>
      <View style={styles.footerRow}>
        <UIText variant="bodyMedium" color={Colors.TEXT_TERTIARY}>
          Total:
        </UIText>
        <UIText variant="bodySemiBold" color={Colors.TEXT_TERTIARY}>
          {totalPrice.toFixed(2)}
        </UIText>
      </View>
      <Spacer height={15} />

      <View style={styles.footerRow}>
        <UIText variant="bodyMedium" color={Colors.TEXT_TERTIARY}>
          Count:
        </UIText>
        <UIText variant="bodySemiBold" color={Colors.TEXT_TERTIARY}>
          {count}
        </UIText>
      </View>
      <Spacer height={15} />

      <View style={styles.separator} />
      <Spacer height={15} />

      <View style={styles.footerRow}>
        <UIText variant="bodyMedium" color={Colors.TEXT_TERTIARY}>
          Grand Total:
        </UIText>
        <UIText variant="bodySemiBold">{totalPrice.toFixed(2)}</UIText>
      </View>
      <Spacer height={25} />

      <UIButton text="Checkout" onPress={showAlert} />
      <Spacer height={40} />
    </>
  );
};

export default BasketListFooterComponent;
