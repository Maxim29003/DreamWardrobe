import { KeyboardAvoidingView, ScrollView, Text } from 'react-native';
import React, { useEffect } from 'react';
import MainContainer from '@layouts/MainContainer/MainContainer';
import { isIPhone } from '@utils/platform';
import Spacer from '@components/Spacer/Spacer';
import { typography } from '@styles/typography';
import SignUpForm from './components/SignUpForm/SignUpForm';
import UIText from '@ui/Text/UIText';

const SignUpScreen = () => {
  return (
    <MainContainer scrollable keyboardAware>
      <Spacer height={94} />
      <UIText style={{ textAlign: 'center' }}>Sign Up</UIText>
      <Spacer height={100} />
      <SignUpForm />
    </MainContainer>
  );
};

export default SignUpScreen;
