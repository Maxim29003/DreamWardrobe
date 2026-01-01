import React, { useEffect } from 'react';
import MainContainer from '@layouts/MainContainer/MainContainer';
import useAppNavigation from '@hooks/useAppNavigation';
import { SCREENS } from '@routes/navigations.types';
import Spacer from '@components/Spacer/Spacer';
import UIText from '@ui/Text/UIText';
import UIButton from '@ui/Button/UIButton';
import { styles } from './styles';


const AuthInitScreen = () => {
  const navigation = useAppNavigation();
  return (
    <MainContainer style={styles.initContainer}>
      <UIText style={styles.initTitle}>
        Welcom to {'\n'} Dream Wardrobe
      </UIText>
      <Spacer height={30} />
      <UIButton
        text="Sign In"
        variant="secondary"
        onPress={() => {
          navigation.navigate(SCREENS.AUTH, {auth:'signIn'});
        }}
      />

      <UIButton
        text="Sign Up"
        variant="secondary"
        onPress={() => {
         navigation.navigate(SCREENS.AUTH, {auth:'signUp'});
        }}
      />
    </MainContainer>
  );
};

export default AuthInitScreen;
