import { View, Text } from 'react-native';
import React from 'react';
import Spacer from '@components/Spacer/Spacer';
import InputBase from '@components/InputBase/InputBase';
import { typography } from '@styles/typography';
import PrimaryButton from '@ui/PrimaryButton/PrimaryButton';
import { Controller, useForm } from 'react-hook-form';
import { useAppDispatch } from '@hooks/useAppDispatch';
import UserActions from '@store/actions/user.actions';

type FormData = {
  email: string;
  password: string;
};

const SignInForm = () => {
  const dispatch = useAppDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormData>();

  const onSubmit = async ({ email, password }: FormData) => {
      console.log(email, password);
      try {
        await dispatch(UserActions.signIn({email, password})).unwrap()
      } catch (err: any) {
        console.log('onSubmit', err);
        setError('root', {
          type: 'deps',
          message: err || 'Something went wrong',
        });
      }
    };

  return (
    <View>
      {errors.root && (
        <Text style={{ color: 'red', marginBottom: 10 }}>
          {errors.root.message}
        </Text>
      )}
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View>
            <Text style={typography.smallTitleSecondary}>Email</Text>
            <Spacer height={10} />
            <InputBase
              style={errors.email && { borderWidth: 1, borderColor: 'red' }}
              placeholder="Email"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          </View>
        )}
        name="email"
      />
      {errors.email && (
        <Text style={typography.smallTitleSecondary}>Email is required</Text>
      )}
      <Spacer height={25} />
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View>
            <Text style={typography.smallTitleSecondary}>Password</Text>
            <Spacer height={10} />
            <InputBase
              style={errors.password && { borderWidth: 1, borderColor: 'red' }}
              placeholder="Password"
              type="password"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          </View>
        )}
        name="password"
      />
      {errors.password && (
        <Text style={typography.smallTitleSecondary}>Password is required</Text>
      )}
      <Spacer height={59} />
      <PrimaryButton text={'Sign In'} onPress={handleSubmit(onSubmit)} />
      <Spacer height={20} />
    </View>
  );
};

export default SignInForm;
