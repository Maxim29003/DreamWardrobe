import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import Avatar from '@components/Avatar/Avatar';
import Spacer from '@components/Spacer/Spacer';
import UIText from '@ui/Text/UIText';
import { Colors } from '@styles/colors';
import { styles } from './styles';

type ListEmptyComponentProps = {
  variant?: 'home';
  productsStatus?: 'idle' | 'loading' | 'succeeded' | 'failed';
  text?: string;
  icon?: React.ReactNode;
};

const ListEmptyComponent = ({
  icon,
  text,
  variant,
  productsStatus,
}: ListEmptyComponentProps) => {
  if (variant === 'home' && productsStatus !== undefined) {
    return (
      <View style={styles.loaderContainer}>
        {(productsStatus === 'loading' || productsStatus === 'idle') && (
          <ActivityIndicator color={Colors.PRIMARY} size="large" />
        )}
        {productsStatus === 'succeeded' && (
          <UIText style={styles.text} color={Colors.TEXT_SECONDARY}>
            No Products
          </UIText>
        )}
        {productsStatus === 'failed' && (
          <UIText style={styles.text} color={Colors.TEXT_SECONDARY}>
            Error loading products
          </UIText>
        )}
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {icon ? <Avatar icon={icon} size={120} /> : null}
      <Spacer height={20} />
      {text ? (
        <UIText style={styles.text} color={Colors.TEXT_SECONDARY}>
          {text}
        </UIText>
      ) : null}
    </View>
  );
};

export default ListEmptyComponent;
