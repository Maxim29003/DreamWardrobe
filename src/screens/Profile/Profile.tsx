import { View } from 'react-native';
import React from 'react';
import MainContainer from '@layouts/MainContainer/MainContainer';
import Header from '@layouts/Header/Header';
import Avatar from '@components/Avatar/Avatar';
import Spacer from '@components/Spacer/Spacer';
import UIButton from '@ui/Button/UIButton';
import { useAppDispatch } from '@hooks/useAppDispatch';
import UserActions from '@store/actions/user.actions';
import { useAppSelector } from '@hooks/useAppSelector';
import UserSelectors from '@store/selectors/user.selectors';
import UIText from '@ui/Text/UIText';
import { Colors } from '@styles/colors';


const Profile = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(UserSelectors.user)[0];
  return (
    <MainContainer>
      <Header variant="back-title" title='My Profile'/>
      <View style={{ alignItems: 'center' }}>
        <Spacer height={20} />
        <Avatar
          size={120}
          uri="https://avatars.mds.yandex.net/i?id=451c2720edb5fdad00d8f320ba5d50980af55381-9065873-images-thumbs&n=13"
        />
        <Spacer height={69} />
      </View>
      <UIText variant="bodyMedium" color={Colors.TEXT_TERTIARY}>Name: {user.name}</UIText>
      <Spacer height={10} />
      <UIText variant="bodyMedium" color={Colors.TEXT_TERTIARY}>Email: {user.email}</UIText>
      <Spacer height={55} />
      <UIButton
        text="Logout"
        onPress={() => dispatch(UserActions.logout(user.sessionId))}
      />
      <Spacer height={20} />
    </MainContainer>
  );
};

export default Profile;
