import { FlatList, FlatListProps, View } from 'react-native';
import React, { useMemo } from 'react';
import Spacer from '@components/Spacer/Spacer';
import { Colors } from '@styles/colors';
import UIText from '@ui/Text/UIText';

type GridLayoutProps<T> = {
  data: T[];
  renderItem: (item: T) => React.ReactNode;
  parentPaddingHorizontal?: number;
  numColumns?: number;
  rowGap?: number;
  columnGap?: number;
  heightItem?: number;
  widthScreen?: number;
} & Omit<FlatListProps<T>, 'renderItem' | 'numColumns'>;

export const GridLayout = <T,>({
  data,
  renderItem,
  parentPaddingHorizontal = 0,
  numColumns = 1,
  rowGap = 0,
  columnGap = 0,
  heightItem = 350,
  widthScreen = 411,
  ...props
}: GridLayoutProps<T>) => {
  const getCardWidth = useMemo(() => {
    return (
      (widthScreen - (numColumns - 1) * rowGap - 2 * parentPaddingHorizontal) /
      numColumns
    );
  }, [widthScreen, numColumns, rowGap, parentPaddingHorizontal]);

  return (
    <FlatList
      data={data}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={() => (
        <UIText style={{ textAlign: 'center' }} color={Colors.TEXT_SECONDARY}>
          No data found
        </UIText>
      )}
      renderItem={({ item, index }) => (
        <View>
          <View style={{ flexDirection: 'row' }}>
            <Spacer width={index % numColumns === 0 ? 0 : rowGap} />
            <View style={{ width: getCardWidth, height: heightItem }}>
              {renderItem(item)}
            </View>
          </View>
          <Spacer height={columnGap} />
        </View>
      )}
      numColumns={numColumns}
      {...props}
    />
  );
};
