import React, { useEffect } from 'react';
import MainContainer from '@layouts/MainContainer/MainContainer';
import useAppNavigation from '@hooks/useAppNavigation';
import { SCREENS } from '@routes/navigations.types';
import Spacer from '@components/Spacer/Spacer';
import UIText from '@ui/Text/UIText';
import UIButton from '@ui/Button/UIButton';
import { storage } from '@utils/MMKVStorage';
import { persistor } from '@store/store';
import { Alert } from 'react-native';

const AuthInitScreen = () => {
  const navigation = useAppNavigation();
  return (
    <MainContainer style={{ justifyContent: 'center', alignItems: 'center' }}>
      <UIText style={{ textAlign: 'center' }}>
        Welcom to {'\n'} Dream Wardrobe
      </UIText>
      <Spacer height={30} />
      <UIButton
        text="Sign In"
        variant="secondary"
        onPress={() => {
          navigation.navigate(SCREENS.SIGN_IN);
        }}
      />

      <UIButton
        text="Sign Up"
        variant="secondary"
        onPress={() => {
          navigation.navigate(SCREENS.SIGN_UP);
        }}
      />
        <UIButton
        text="ClearAll"
        variant="secondary"
        onPress={async() => {
         try {
            

            await persistor.pause(); 
            await persistor.flush(); 
            await persistor.purge(); 

            storage.clearAll(); 
            console.log('Все данные приложения очищены!');
            Alert.alert("ClearAll", 'Все данные приложения очищены!')
          } catch (error) {
            console.error('Ошибка при очистке данных:', error);
            Alert.alert("ClearAll", `Error: ${error}`)
          }

        }}
      />
    </MainContainer>
  );
};

export default AuthInitScreen;
