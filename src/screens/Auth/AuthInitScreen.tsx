import React from 'react';
import MainContainer from '@layouts/MainContainer/MainContainer';
import useAppNavigation from '@hooks/useAppNavigation';
import { SCREENS } from '@routes/navigations.types';
import Spacer from '@components/Spacer/Spacer';
import UIText from '@ui/Text/UIText';
import UIButton from '@ui/Button/UIButton';

const AuthInitScreen = () => {
  const navigation = useAppNavigation();
  return (
    <MainContainer style={{ justifyContent: 'center', alignItems: 'center' }}>
      <UIText style={{ textAlign: 'center' }}>
        Welcom to {'\n'} Dream Wardrobe
      </UIText>
      <Spacer height={30} />
      <UIButton
        text='Sign In'
        variant="secondary"
        onPress={() => {
          navigation.navigate(SCREENS.SIGN_IN);
        }}
      />
    
      <UIButton
        text='Sign Up'
        variant="secondary"
        onPress={() => {
          navigation.navigate(SCREENS.SIGN_UP);
        }}
      />

    </MainContainer>
  );
};

export default AuthInitScreen;
