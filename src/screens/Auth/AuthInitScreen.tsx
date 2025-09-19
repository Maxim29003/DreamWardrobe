import { Text } from 'react-native';
import React from 'react';
import MainContainer from '@layouts/MainContainer/MainContainer';
import { typography } from '@styles/typography';
import Button from '@ui/Button/Button';
import useAppNavigation from '@hooks/useAppNavigation';
import { SCREENS } from '@routes/navigations.types';
import Spacer from '@components/Spacer/Spacer';

const AuthInitScreen = () => {
  const navigation = useAppNavigation();
  return (
    <MainContainer style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Text style={[typography.mainTitle, { textAlign: 'center' }]}>
        Welcom to {'\n'} Dream Wardrobe
      </Text>
      <Spacer height={30} />
      <Button
        onPress={() => {
          navigation.navigate(SCREENS.SIGN_IN);
        }}
      >
        <Text style={typography.smallTitle}>Sign In</Text>
      </Button>
      <Button
        onPress={() => {
          navigation.navigate(SCREENS.SIGN_UP);
        }}
      >
        <Text style={typography.smallTitle}>Sign Up</Text>
      </Button>


    </MainContainer>
  );
};

export default AuthInitScreen;
