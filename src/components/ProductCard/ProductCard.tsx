import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { typography } from '@styles/typography'
import { FONT_COLOR_SECONDARY } from '@styles/colors'
import { blackImage } from '@mocks/testImages'
import LikeButton from '@ui/LikeButton/LikeButton'


const ProductCard = () => {
  return (
    <View style={{flex:1}}>
      <Image source={blackImage} style={{width: '100%', flex:1, borderRadius: 20}}/>
      <LikeButton style={{position: "absolute", right: 12, top:12}}/>
      <Text style={typography.mediumTitle}>Jacket Jeans</Text>
      <Text style={[typography.mediumTitle, {color: FONT_COLOR_SECONDARY}]}>$45.9</Text>
    </View>
  )
}

export default ProductCard

const styles = StyleSheet.create({})