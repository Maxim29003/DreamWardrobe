import { Text, View } from 'react-native';
import React from 'react';
import { typography } from '@styles/typography';
import InputBase from '@components/InputBase/InputBase';
import Spacer from '@components/Spacer/Spacer';
import PrimaryButton from '@ui/PrimaryButton/PrimaryButton';

const SignInForm = () => {
  return (
    <View>
      <View>
        <Text style={typography.smallTitleSecondary}>Name</Text>
        <Spacer height={10} />
        <InputBase placeholder="Name" />
      </View>
      <Spacer height={25} />
      <View>
        <Text style={typography.smallTitleSecondary}>Email</Text>
        <Spacer height={10} />
        <InputBase placeholder="Email" />
      </View>
      <Spacer height={25} />
      <View>
        <Text style={typography.smallTitleSecondary}>Password</Text>
        <Spacer height={10} />
        <InputBase placeholder="Password" type='password' />
      </View>
      <Spacer height={59} />
      <PrimaryButton text={'Sign Up'} />
      <Spacer height={20} />
    </View>
  );
};

export default SignInForm;
