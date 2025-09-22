import { View } from 'react-native';
import React from 'react';
import InputBase from '@ui/InputBase/InputBase';
import Spacer from '@components/Spacer/Spacer';
import UIButton from '@ui/Button/UIButton';
import { Controller, useForm } from 'react-hook-form';
import { account } from '@api/appwrite';
import { ID } from 'appwrite';
import { UserType } from '@type/User.types';
import useAppNavigation from '@hooks/useAppNavigation';
import { SCREENS } from '@routes/navigations.types';
import { Colors } from '@styles/colors';
import UIText from '@ui/Text/UIText';

type FormData = {
  name: string;
  password: string;
  email: string;
};

const SignUpForm = () => {
  const navigation = useAppNavigation();

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async ({ email, password, name }: FormData) => {
    console.log(email, password, name);
    try {
      const user = (await account.create(
        ID.unique(),
        email,
        password,
        name,
      )) as UserType;
      console.log(`User ${user.name} created`);
      navigation.navigate(SCREENS.SIGN_IN);
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
              Name
            </UIText>
            <Spacer height={10} />
            <InputBase
              style={
                errors.name && { borderWidth: 1, borderColor: Colors.ERROR }
              }
              placeholder="Name"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          </View>
        )}
        name="name"
      />
      {errors.name && (
        <UIText variant="body" color={Colors.ERROR}>
          Name is is required
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
      <UIButton text={'Sign Up'} onPress={handleSubmit(onSubmit)} />
      <Spacer height={20} />
    </View>
  );
};

export default SignUpForm;
