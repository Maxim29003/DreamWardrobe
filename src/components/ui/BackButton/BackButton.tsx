import { TouchableOpacityProps } from 'react-native'
import React from 'react'
import Button from '../Button/Button'
import { ArrowBackIcon } from '@constants/Icons/Icons'
import { PRIMARY } from '@styles/colors'
import { styles } from './styles'

const BackButton = (props: TouchableOpacityProps) => {
  return (
        <Button {...props} style={styles.buttonStyles}>
            <ArrowBackIcon fill={PRIMARY}/>
        </Button>
  )
}

export default BackButton

