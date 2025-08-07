import { FlatList, FlatListProps, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';

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
  const [selectedValue, setSelectedValue] = useState<T | undefined>(value);

  useEffect(() => {
    if (value === undefined && data.length > 0) {
      setSelectedValue(data[0]);
      if (onChange) {
        onChange(data[0]);
      }
    }
  }, []);

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
