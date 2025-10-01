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
import { persistor } from '@store/store';
import { storage } from '@utils/MMKVStorage';

const Profile = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(UserSelectors.user);
  return (
    <MainContainer>
      <Header variant="back-title" title="My Profile" />
      <View style={{ alignItems: 'center' }}>
        <Spacer height={20} />
        <Avatar
          size={120}/>
        <Spacer height={69} />
      </View>
      <UIText variant="bodyMedium" color={Colors.TEXT_TERTIARY}>
        Name: {user?.name ?? '—'}
      </UIText>
      <Spacer height={10} />
      <UIText variant="bodyMedium" color={Colors.TEXT_TERTIARY}>
        Email: {user?.email ?? '—'}
      </UIText>
      <Spacer height={55} />
      <UIButton
        text="Logout"
        onPress={async () => {
          if (user?.sessionId) {
            dispatch(UserActions.logout(user.sessionId));
          }
        }}
      />
      <Spacer height={20} />
    </MainContainer>
  );
};

export default Profile;
