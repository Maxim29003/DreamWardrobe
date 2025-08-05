import { StyleSheet, Text } from 'react-native'
import React from 'react'
import MainContainer from '@layouts/MainContainer/MainContainer'
import Header from '@layouts/Header/Header'
import BackButton from '@layouts/Header/components/BackButton/BackButton'
import { typography } from '@styles/typography'


const Profile = () => {
  return (
   <MainContainer>
      <Header>
        <BackButton />
        <Text style={[typography.mainTitle, {flex:1, textAlign: 'center'}]}>My Profile</Text>
      </Header>
     <Text>Profile</Text>
   </MainContainer>
  )
}

export default Profile

const styles = StyleSheet.create({})