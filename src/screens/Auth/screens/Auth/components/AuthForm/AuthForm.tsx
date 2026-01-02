import React, { useState } from 'react';
import { View } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import auth from '@react-native-firebase/auth';

import InputBase from '@ui/InputBase/InputBase';
import Spacer from '@components/Spacer/Spacer';
import UIButton from '@ui/Button/UIButton';
import UIText from '@ui/Text/UIText';
import useAppNavigation from '@hooks/useAppNavigation';
import { SCREENS } from '@routes/navigations.types';
import { Colors } from '@styles/colors';

import { styles } from './styles';

type FormData = {
  password: string;
  email: string;
};

type AuthFormProps = {
  authType: 'signIn' | 'signUp';
};

const AuthForm = ({ authType }: AuthFormProps) => {
  const navigation = useAppNavigation();
  const [isLoading, setIsLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormData>();

  const handlerError = (error: any) => {
    switch (error) {
      case 'auth/email-already-in-use':
        return setError('email', {
          type: 'deps',
          message: 'This email address is already in use.',
        });

      case 'auth/invalid-email':
        return setError('email', {
          type: 'deps',
          message: 'Please enter a valid email address.',
        });

      case 'auth/weak-password':
        return setError('password', {
          type: 'deps',
          message: 'The password is too weak.',
        });

      case 'auth/missing-password':
        return setError('password', {
          type: 'deps',
          message: 'Please enter a password.',
        });

      case 'auth/network-request-failed':
        return setError('root', {
          type: 'deps',
          message: 'No internet connection. Please try again.',
        });

      default:
        return setError('root', {
          type: 'deps',
          message: 'Something went wrong. Please try again.',
        });
    }
  };

  const onSubmit = async ({ email, password }: FormData) => {
    setIsLoading(true);
    if (authType === 'signUp') {
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          navigation.navigate(SCREENS.HOME_TABS);
        })
        .finally(() => {
          setIsLoading(false);
        })
        .catch(error => {
          handlerError(error.code);
        });
    } else {
      auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          navigation.navigate(SCREENS.HOME_TABS);
        })
        .finally(() => {
          setIsLoading(false);
        })
        .catch(error => {
          handlerError(error.code);
        });
    }
  };

  return (
    <View>
      {errors.root && (
        <View style={styles.errorContainer}>
          <Spacer height={10} />
          <UIText variant="body" color={Colors.ERROR} style={styles.errorText}>
            {errors.root.message}
          </UIText>
          <Spacer height={10} />
        </View>
      )}
      <Controller
        control={control}
        rules={{
          required: {
            value: true,
            message: 'Это поле обязательно для заполнения',
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View>
            <UIText variant="bodyMedium" color={Colors.TEXT_TERTIARY}>
              Email
            </UIText>

            <Spacer height={10} />
            <InputBase
              style={errors.email && styles.inputError}
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
        <View style={styles.errorContainer}>
          <Spacer height={10} />
          <UIText variant="body" color={Colors.ERROR}>
            {errors.email.message}
          </UIText>
        </View>
      )}

      <Spacer height={25} />
      <Controller
        control={control}
        rules={{
          required: {
            value: true,
            message: 'Это поле обязательно для заполнения',
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View>
            <UIText variant="bodyMedium" color={Colors.TEXT_TERTIARY}>
              Password
            </UIText>
            <Spacer height={10} />
            <InputBase
              style={errors.password && styles.inputError}
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
        <View style={styles.errorContainer}>
          <Spacer height={10} />
          <UIText variant="body" color={Colors.ERROR}>
            {errors.password.message}
          </UIText>
        </View>
      )}
      <Spacer height={59} />
      <UIButton
        text={'Sign Up'}
        variant={isLoading ? 'disabled' : 'primary'}
        activeIndicator={isLoading}
        onPress={handleSubmit(onSubmit)}
      />
      <Spacer height={20} />
    </View>
  );
};

export default AuthForm;
