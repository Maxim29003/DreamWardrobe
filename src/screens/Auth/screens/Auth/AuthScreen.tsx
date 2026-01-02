import React from 'react';
import MainContainer from '@layouts/MainContainer/MainContainer';
import Spacer from '@components/Spacer/Spacer';
import UIText from '@ui/Text/UIText';
import { View } from 'react-native';
import useAppRoute from '@hooks/useAppRoute';
import { SCREENS } from '@routes/navigations.types';
import { styles } from './styles';
import AuthForm from './components/AuthForm/AuthForm';

const AuthScreen = () => {
  const route = useAppRoute<SCREENS.AUTH>();
  const auth = route.params.auth;

  return (
    <MainContainer scrollable keyboardAware topPadding={'insets'}>
      <View style={styles.container}>
        <UIText style={styles.title}>
          {auth === 'signIn' ? 'Sign In' : 'Sign Up'}
        </UIText>
        <Spacer height={40} />
        <AuthForm authType={auth} />
      </View>
    </MainContainer>
  );
};

export default AuthScreen;
