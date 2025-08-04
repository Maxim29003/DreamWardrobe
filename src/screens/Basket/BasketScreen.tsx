import { StyleSheet, Text } from 'react-native';
import React from 'react';
import MainContainer from '@layouts/MainContainer/MainContainer';
import Header from '@layouts/Header/Header';
import BackButton from '@layouts/Header/components/BackButton/BackButton';
import { typography } from '@styles/typography';
import Avatar from '@ui/Avatar/Avatar';

const BasketScreen = () => {
  return (
    <MainContainer>
      <Header>
        <BackButton />
        <Text style={typography.mainTitleStyles}>My Basket</Text>
        <Avatar
          size={44}
          uri="https://avatars.mds.yandex.net/i?id=451c2720edb5fdad00d8f320ba5d50980af55381-9065873-images-thumbs&n=13"
        />
      </Header>
      <Text>BasketScreen</Text>
    </MainContainer>
  );
};

export default BasketScreen;

const styles = StyleSheet.create({});
