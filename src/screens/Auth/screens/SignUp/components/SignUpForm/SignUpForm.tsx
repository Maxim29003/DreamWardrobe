import { View, Text } from 'react-native';
import React from 'react';
import Spacer from '@components/Spacer/Spacer';
import InputBase from '@components/InputBase/InputBase';
import { typography } from '@styles/typography';
import PrimaryButton from '@ui/PrimaryButton/PrimaryButton';

const SignUpForm = () => {
  return (
    <View>
      <View>
        <Text style={typography.smallTitleSecondary}>Name</Text>
        <Spacer height={10} />
        <InputBase placeholder="Name" />
      </View>
      <Spacer height={25} />
      <View>
        <Text style={typography.smallTitleSecondary}>Password</Text>
        <Spacer height={10} />
        <InputBase placeholder="Password" type="password" />
      </View>
      <Spacer height={59} />
      <PrimaryButton text={'Sign Up'} />
      <Spacer height={20} />
    </View>
  );
};

export default SignUpForm;
