import { View } from 'react-native';
import React from 'react';
import InputBase from '@components/InputBase/InputBase';
import Button from '@ui/Button/Button';
import { SearchIcon } from '@constants/Icons/Icons';
import { FONT_COLOR_SECONDARY } from '@styles/colors';
import Spacer from '@components/Spacer/Spacer';
import { styles } from './styles';

const SearchInput = () => {
  return (
    <View style={styles.container}>
      <Spacer width={15} />
      <Button style={styles.button}>
        <SearchIcon fill={FONT_COLOR_SECONDARY} width={26} height={26} />
      </Button>
      <Spacer width={10} />
      <InputBase placeholder="Search" />
      <Spacer width={15} />
    </View>
  );
};

export default SearchInput;
