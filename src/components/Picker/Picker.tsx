import { FlatList, FlatListProps, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

type PickerProps<T> = {
  value?: T;
  data: T[];
  renderItem: (item: T, selectedValue: T | undefined) => React.ReactNode;
  onChange?: (value: T) => void;
} & Omit<FlatListProps<T>, 'renderItem'>;

const Picker = <T,>({
  value,
  data,
  renderItem,
  onChange,
  ...props
}: PickerProps<T>) => {
  const [selectedValue, setSelectedValue] = useState<T | undefined>(value === undefined && data.length > 0 ? data[0] : value);

  const handleSelect = (item: T) => {
    setSelectedValue(item);
    if (onChange) {
      onChange(item);
    }
  };

  return (
    <FlatList
      {...props}
      data={data}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => handleSelect(item)}>
          {renderItem(item, selectedValue)}
        </TouchableOpacity>
      )}
    />
  );
};

export default Picker;
