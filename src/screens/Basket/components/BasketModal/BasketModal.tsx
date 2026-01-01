import React from 'react';
import { Modal, View } from 'react-native';

import UIButton from '@ui/Button/UIButton';
import Spacer from '@components/Spacer/Spacer';
import UIText from '@ui/Text/UIText';
import { Colors } from '@styles/colors';

import { styles } from './styles';

type BasketModalProps = {
  alertVisible: boolean;
  totalPrice: number;
  hideAlert: () => void;
};

const BasketModal = ({
  alertVisible,
  totalPrice,
  hideAlert,
}: BasketModalProps) => {
  return (
    <Modal transparent visible={alertVisible} animationType="fade">
      <View style={styles.backdrop}>
        <View style={styles.content}>
          <View>
            <View style={styles.footerRow}>
              <UIText variant="bodyMedium" color={Colors.TEXT_TERTIARY}>
                Grand Total:
              </UIText>
              <Spacer width={10} />
              <UIText variant="bodySemiBold">{totalPrice.toFixed(2)}</UIText>
            </View>
          </View>
          <Spacer height={20} />
          <UIButton variant="secondary" text="Ok" onPress={hideAlert} />
        </View>
      </View>
    </Modal>
  );
};

export default BasketModal;
