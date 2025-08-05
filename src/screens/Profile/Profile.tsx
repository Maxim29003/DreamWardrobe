import { Text, View } from 'react-native';
import React from 'react';
import MainContainer from '@layouts/MainContainer/MainContainer';
import Header from '@layouts/Header/Header';
import BackButton from '@layouts/Header/components/BackButton/BackButton';
import { typography } from '@styles/typography';
import Avatar from '@ui/Avatar/Avatar';
import Spacer from '@components/Spacer/Spacer';
import PrimaryButton from '@ui/PrimaryButton/PrimaryButton';

const Profile = () => {
  return (
    <MainContainer>
      <Header>
        <BackButton />
        <Text style={[typography.mainTitle, { flex: 1, textAlign: 'center' }]}>
          My Profile
        </Text>
      </Header>
      <View style={{ alignItems: 'center' }}>
        <Spacer height={20} />
        <Avatar
          size={120}
          uri="https://avatars.mds.yandex.net/i?id=451c2720edb5fdad00d8f320ba5d50980af55381-9065873-images-thumbs&n=13"
        />
        <Spacer height={69} />
      </View>
      <Text style={typography.smallTitleSecondary}>Name: {'Emily'}</Text>
      <Spacer height={10} />
      <Text style={typography.smallTitleSecondary}>
        Email: {'emily@gmail.com'}
      </Text>
      <Spacer height={55} />
      <PrimaryButton text="Logout" />
      <Spacer height={20} />
    </MainContainer>
  );
};

export default Profile;
