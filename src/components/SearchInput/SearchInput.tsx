import { View } from 'react-native';
import React from 'react';
import InputBase from '@ui/InputBase/InputBase';
import { SearchIcon } from '@constants/Icons/Icons';
import { Colors } from '@styles/colors';
import Spacer from '@components/Spacer/Spacer';
import { styles } from './styles';
import UIIconButton from '@ui/IconButton/UIIconButton';

type SearchInputProps = {
  value?: string | undefined;
  onChangeText?: ((text: string) => void) | undefined;
};

const SearchInput = ({ value, onChangeText }: SearchInputProps) => {
  return (
    <View style={styles.container}>
      <Spacer width={15} />
      <UIIconButton
        style={styles.button}
        icon={<SearchIcon fill={Colors.TEXT_INPUT} width={26} height={26} />}
      />
      <Spacer width={10} />
      <InputBase
        style={styles.input}
        placeholder="Search"
        value={value}
        onChangeText={onChangeText}
      />
      <Spacer width={15} />
    </View>
  );
};

export default SearchInput;
