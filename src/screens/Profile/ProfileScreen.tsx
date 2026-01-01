import { Alert, View } from 'react-native';
import React from 'react';
import MainContainer from '@layouts/MainContainer/MainContainer';
import Avatar from '@components/Avatar/Avatar';
import Spacer from '@components/Spacer/Spacer';
import UIButton from '@ui/Button/UIButton';
import UIText from '@ui/Text/UIText';
import { Colors } from '@styles/colors';
import { useHeaderHeight } from '@react-navigation/elements';
import auth from '@react-native-firebase/auth';
import { useAuth } from '@hooks/useAuth';
import { ProfileIcon } from '@constants/Icons/Icons';
import useAppNavigation from '@hooks/useAppNavigation';
import { SCREENS } from '@routes/navigations.types';

const ProfileScreen = () => {
  const navigation = useAppNavigation();
  const headerHeight = useHeaderHeight();
  const { user, isEmailVerified } = useAuth();

  const handleLogout = async () => {
    await auth().signOut();
  };

  const handleChangePassword = () => {
    auth()
      .sendPasswordResetEmail(user?.email ?? '')
      .then(() => {
        Alert.alert(
          '📩 Check your email',
          'If an account with this email exists, we have sent a link to reset your password.',
          [{ text: 'OK', style: 'default' }],
        );
      })
      .catch(() => {
        Alert.alert(
          'Error',
          'If an account with this email exists, we have sent a link to reset your password.',
          [{ text: 'OK', style: 'default' }],
        );
      });
  };

  const handleSendVerification = () => {
    user?.sendEmailVerification();
    Alert.alert(
      '📩 Check your email',
      'Please verify your email address using the link we sent you.',
    );
  };

  const handleGoSignIn = () => {
    navigation.navigate(SCREENS.AUTH, { auth: 'signIn' });
  };

  const handleGoSignUp = () => {
    navigation.navigate(SCREENS.AUTH, { auth: 'signUp' });
  };

  return (
    <MainContainer topPadding={headerHeight}>
      <View style={{ alignItems: 'center' }}>
        <Spacer height={20} />
        {user ? (
          <Avatar name={user?.email ?? 'User'} size={120} />
        ) : (
          <Avatar
            icon={<ProfileIcon width={40} height={40} fill={Colors.PRIMARY} />}
            size={120}
          />
        )}

        <Spacer height={40} />
      </View>
      {user ? (
        <>
          <UIText
            variant="bodyMedium"
            color={Colors.TEXT_TERTIARY}
            style={{ textAlign: 'center' }}
          >
            {user?.email ?? '—'}
          </UIText>
          <Spacer height={30} />
          <UIButton text="Logout" onPress={handleLogout} />
          <Spacer height={20} />
          <UIButton
            text="Change Password"
            variant="primary"
            onPress={handleChangePassword}
          />
          {!isEmailVerified && (
            <View>
              <Spacer height={20} />
              <UIText variant="bodyMedium" color={Colors.PRIMARY}>
                Please verify your email to continue
              </UIText>
              <Spacer height={10} />
              <UIButton
                text="Email Verification"
                variant="primary"
                onPress={handleSendVerification}
              />
            </View>
          )}
        </>
      ) : (
        <View>
          <UIText style={{ textAlign: 'center' }}>Welcome!</UIText>
          <Spacer height={20} />
          <UIText variant="bodyMedium" color={Colors.TEXT_TERTIARY}>
            Sign in to your account to access personalized features
          </UIText>
          <Spacer height={20} />
          <UIButton text="Sign In" variant="primary" onPress={handleGoSignIn} />
          <Spacer height={10} />
          <UIButton text="Sign Up" variant="primary" onPress={handleGoSignUp} />
          <Spacer height={10} />
        </View>
      )}
    </MainContainer>
  );
};

export default ProfileScreen;
