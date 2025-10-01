import React from 'react';
import SignInForm from './components/SignInForm/SignInForm';
import MainContainer from '@layouts/MainContainer/MainContainer';
import Spacer from '@components/Spacer/Spacer';
import UIText from '@ui/Text/UIText';

const SignInScreen = () => {
  return (
    <MainContainer scrollable keyboardAware>
      <Spacer height={94} />
      <UIText style={{ textAlign: 'center' }}>Sign In</UIText>
      <Spacer height={100} />
      <SignInForm />
    </MainContainer>
  );
};

export default SignInScreen;
