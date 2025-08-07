import { Image, Text, View } from 'react-native'
import React from 'react'
import { typography } from '@styles/typography'
import { blackImage } from '@mocks/testImages'
import LikeButton from '@ui/LikeButton/LikeButton'
import { styles } from './styles'


const ProductCard = () => {
  return (
    <View style={styles.container}>
      <Image source={blackImage} style={styles.image} />
      <LikeButton style={styles.likeButton} />
      <Text style={typography.mediumTitle}>Jacket Jeans</Text>
      <Text style={[typography.mediumTitle, styles.price]}>$45.9</Text>
    </View>
  )
}

export default ProductCard

