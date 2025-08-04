import { TouchableOpacityProps } from 'react-native';
import React from 'react';
import { ArrowBackIcon } from '@constants/Icons/Icons';
import { PRIMARY } from '@styles/colors';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import Button from '@ui/Button/Button';


const BackButton = (props: TouchableOpacityProps) => {
  const navigation = useNavigation()
  return (
    <Button {...props} style={styles.buttonStyles} onPress={()=>{navigation.goBack()}}>
      <ArrowBackIcon fill={PRIMARY} />
    </Button>
  );
};

export default BackButton;
