import { Text, View } from 'react-native';
import React from 'react';
import { typography } from '@styles/typography';
import InputBase from '@components/InputBase/InputBase';
import Spacer from '@components/Spacer/Spacer';
import PrimaryButton from '@ui/PrimaryButton/PrimaryButton';
import { useAppDispatch } from '@hooks/useAppDispatch';
import UserActions from '@store/actions/user.actions';
import { Controller, useForm } from 'react-hook-form';
import { account } from '@api/appwrite';
import { ID } from 'appwrite';
import { UserType } from '@type/User.types';
import useAppNavigation from '@hooks/useAppNavigation';
import { SCREENS } from '@routes/navigations.types';

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
            <Text style={typography.smallTitleSecondary}>Name</Text>
            <Spacer height={10} />
            <InputBase
              style={errors.name && { borderWidth: 1, borderColor: 'red' }}
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
        <Text style={typography.smallTitleSecondary}>Name is is required</Text>
      )}
      <Spacer height={25} />

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
      <PrimaryButton text={'Sign Up'} onPress={handleSubmit(onSubmit)} />
      <Spacer height={20} />
    </View>
  );
};

export default SignUpForm;
