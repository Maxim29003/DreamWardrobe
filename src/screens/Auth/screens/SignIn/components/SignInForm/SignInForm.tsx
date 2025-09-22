import { View } from 'react-native';
import React from 'react';
import Spacer from '@components/Spacer/Spacer';
import InputBase from '@ui/InputBase/InputBase';
import UIButton from '@ui/Button/UIButton';
import { Controller, useForm } from 'react-hook-form';
import { useAppDispatch } from '@hooks/useAppDispatch';
import UserActions from '@store/actions/user.actions';
import UIText from '@ui/Text/UIText';
import { Colors } from '@styles/colors';

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
      await dispatch(UserActions.signIn({ email, password })).unwrap();
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
        <UIText variant="body" color={Colors.ERROR}>
          {errors.root.message}
        </UIText>
      )}
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View>
            <UIText variant="bodyMedium" color={Colors.TEXT_TERTIARY}>
              Email
            </UIText>
            <Spacer height={10} />
            <InputBase
              style={
                errors.email && { borderWidth: 1, borderColor: Colors.ERROR }
              }
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
        <UIText variant="body" color={Colors.ERROR}>
          Email is required
        </UIText>
      )}
      <Spacer height={25} />
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View>
            <UIText variant="bodyMedium" color={Colors.TEXT_TERTIARY}>
              Password
            </UIText>

            <Spacer height={10} />
            <InputBase
              style={
                errors.password && { borderWidth: 1, borderColor: Colors.ERROR }
              }
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
        <UIText variant="body" color={Colors.ERROR}>
          Password is required
        </UIText>
      )}
      <Spacer height={59} />
      <UIButton text={'Sign In'} onPress={handleSubmit(onSubmit)} />
      <Spacer height={20} />
    </View>
  );
};

export default SignInForm;
