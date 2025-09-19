import { KeyboardAvoidingView, ScrollView, Text } from 'react-native';
import React, { useEffect } from 'react';
import MainContainer from '@layouts/MainContainer/MainContainer';
import { isIPhone } from '@utils/platform';
import Spacer from '@components/Spacer/Spacer';
import { typography } from '@styles/typography';
import SignUpForm from './components/SignUpForm/SignUpForm';

const SignUpScreen = () => {

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
          <SignUpForm />
        </ScrollView>
      </KeyboardAvoidingView>
    </MainContainer>
  );
};

export default SignUpScreen;
