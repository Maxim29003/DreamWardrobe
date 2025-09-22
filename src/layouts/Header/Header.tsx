import { View } from 'react-native';
import React from 'react';
import { styles } from './styles';
import useAppNavigation from '@hooks/useAppNavigation';
import UIIconButton from '@ui/IconButton/UIIconButton';
import { Colors } from '@styles/colors';
import { ArrowBackIcon } from '@constants/Icons/Icons';
import HeaderMainLabel from './components/HeaderMainLabel/HeaderMainLabel';
import Avatar from '@components/Avatar/Avatar';
import UIText from '@ui/Text/UIText';

type HeaderProps = {
  variant: 'label-avatar' | 'back-title-avatar' | 'back-avatar' | 'back-title';
  title?: string;
};

const Header = ({ variant, title }: HeaderProps) => {
  const navigation = useAppNavigation();

  return (
    <View style={styles.container}>
      {variant === 'label-avatar' && (
        <>
          <HeaderMainLabel />
          <Avatar
            size={44}
            uri="https://avatars.mds.yandex.net/i?id=451c2720edb5fdad00d8f320ba5d50980af55381-9065873-images-thumbs&n=13"
          />
        </>
      )}

      {variant === 'back-title-avatar' && (
        <>
          <UIIconButton
            variant="filled"
            size={44}
            onPress={() => navigation.goBack()}
            icon={<ArrowBackIcon fill={Colors.ICON_PRIMARY} />}
          />
          <UIText>{title}</UIText>
          <Avatar
            size={44}
            uri="https://avatars.mds.yandex.net/i?id=451c2720edb5fdad00d8f320ba5d50980af55381-9065873-images-thumbs&n=13"
          />
        </>
      )}

      {variant === 'back-avatar' && (
        <>
          <UIIconButton
            variant="filled"
            size={44}
            onPress={() => navigation.goBack()}
            icon={<ArrowBackIcon fill={Colors.ICON_PRIMARY} />}
          />

          <Avatar
            size={44}
            uri="https://avatars.mds.yandex.net/i?id=451c2720edb5fdad00d8f320ba5d50980af55381-9065873-images-thumbs&n=13"
          />
        </>
      )}

      {variant === 'back-title' && (
        <>
          <UIIconButton
            size={44}
            onPress={() => navigation.goBack()}
            variant="filled"
            icon={<ArrowBackIcon fill={Colors.ICON_PRIMARY} />}
          />
          <UIText
            variant="heading"
            color={Colors.TEXT_PRIMARY}
            style={{ flex: 1, textAlign: 'center' }}
          >
            My Profile
          </UIText>
        </>
      )}
    </View>
  );
};

export default Header;
