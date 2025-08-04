import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import MainContainer from '@layouts/MainContainer/MainContainer';
import BackButton from '@layouts/Header/components/BackButton/BackButton';
import Header from '@layouts/Header/Header';
import Avatar from '@ui/Avatar/Avatar';


const ProductDetailScreen = () => {
  return (
    <MainContainer>
      <Header>
       <BackButton />
        <Avatar
          size={44}
          uri="https://avatars.mds.yandex.net/i?id=451c2720edb5fdad00d8f320ba5d50980af55381-9065873-images-thumbs&n=13"
        />
      </Header>
      <Text>ProductDetailScreen</Text>
    </MainContainer>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({});
