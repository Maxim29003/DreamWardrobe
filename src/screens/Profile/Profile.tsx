import { Text, View } from 'react-native';
import React from 'react';
import MainContainer from '@layouts/MainContainer/MainContainer';
import Header from '@layouts/Header/Header';
import BackButton from '@layouts/Header/components/BackButton/BackButton';
import { typography } from '@styles/typography';
import Avatar from '@ui/Avatar/Avatar';
import Spacer from '@components/Spacer/Spacer';
import PrimaryButton from '@ui/PrimaryButton/PrimaryButton';
import { useAppDispatch } from '@hooks/useAppDispatch';
import UserActions from '@store/actions/user.actions';
import { useAppSelector } from '@hooks/useAppSelector';
import UserSelectors from '@store/selectors/user.selectors';


const Profile = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(UserSelectors.user)[0];
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
      <Text style={typography.smallTitleSecondary}>Name: {user.name}</Text>
      <Spacer height={10} />
      <Text style={typography.smallTitleSecondary}>Email: {user.email}</Text>
      <Spacer height={55} />
      <PrimaryButton
        text="Logout"
        onPress={() => dispatch(UserActions.logout(user.sessionId))}
      />
      <Spacer height={20} />
    </MainContainer>
  );
};

export default Profile;
