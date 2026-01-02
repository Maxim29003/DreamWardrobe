import { View } from 'react-native';
import React from 'react';
import { styles } from './styles';
import useAppNavigation from '@hooks/useAppNavigation';
import UIIconButton from '@ui/IconButton/UIIconButton';
import { Colors } from '@styles/colors';
import { ArrowBackIcon, ProfileIcon } from '@constants/Icons/Icons';
import HeaderMainLabel from './components/HeaderMainLabel/HeaderMainLabel';
import Avatar from '@components/Avatar/Avatar';
import UIText from '@ui/Text/UIText';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAuth } from '@hooks/useAuth';

type HeaderProps = {
  variant:
    | 'label-avatar'
    | 'back-title-avatar'
    | 'back-avatar'
    | 'back-title'
    | 'back';
  title?: string;
};

const Header = ({ variant, title }: HeaderProps) => {
  const navigation = useAppNavigation();
  const insets = useSafeAreaInsets();
  const { user } = useAuth();

  const HeaderAvatar = () => {
    if (!user) {
      return <Avatar icon={<ProfileIcon fill={Colors.PRIMARY} />} size={44} />;
    } else {
      return <Avatar size={44} name={user?.email ?? 'User'} />;
    }
  };

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top,
          paddingLeft: insets.left + 30,
          paddingRight: insets.right + 30,
          paddingBottom: 15,
        },
      ]}
    >
      {variant === 'label-avatar' && (
        <>
          <HeaderMainLabel />
          {HeaderAvatar()}
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
          {HeaderAvatar()}
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

          {HeaderAvatar()}
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
      {variant === 'back' && (
        <>
          <UIIconButton
            size={44}
            onPress={() => navigation.goBack()}
            variant="filled"
            icon={<ArrowBackIcon fill={Colors.ICON_PRIMARY} />}
          />
        </>
      )}
    </View>
  );
};

export default Header;
