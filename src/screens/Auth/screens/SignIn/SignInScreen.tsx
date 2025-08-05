import { KeyboardAvoidingView, ScrollView, Text } from 'react-native';
import React from 'react';
import SignInForm from './components/SignInForm/SignInForm';
import MainContainer from '@layouts/MainContainer/MainContainer';
import { typography } from '@styles/typography';
import Spacer from '@components/Spacer/Spacer';
import { isIPhone } from '@utils/platform';

const SignInScreen = () => {
  return (
    <MainContainer>
      <KeyboardAvoidingView
        behavior={isIPhone ? 'padding' : 'height'}
        style={{ flex: 1 }}
        keyboardVerticalOffset={20}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <Spacer height={94} />
          <Text style={[typography.mainTitle, { textAlign: 'center' }]}>
            Sign Up
          </Text>
          <Spacer height={100} />
          <SignInForm />
        </ScrollView>
      </KeyboardAvoidingView>
    </MainContainer>
  );
};

export default SignInScreen;
