import SearchInput from '@components/SearchInput/SearchInput';
import Spacer from '@components/Spacer/Spacer';
import { Colors } from '@styles/colors';
import UIText from '@ui/Text/UIText';
import React from 'react';

type HomeListHeaderComponentPros = {
  handleSearch: (text: string) => void;
  searchTerm: string;
};

const HomeListHeaderComponent = ({
  handleSearch,
  searchTerm,
}: HomeListHeaderComponentPros) => {
  return (
    <>
      <UIText variant="heading" color={Colors.TEXT_PRIMARY}>
        Match Your Style
      </UIText>
      <Spacer height={10} />
      <SearchInput onChangeText={handleSearch} value={searchTerm} />
      <Spacer height={15} />
    </>
  );
};

export default HomeListHeaderComponent;
