import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

type Props = {
  title: string;
  onPress: () => void;
}

export const Button: React.FC<Props> = ({
  title,
  onPress,
}) => {
  return (
    <>
      <TouchableOpacity onPress={onPress}>
        <Text>{title}</Text>
      </TouchableOpacity>
    </>
  )
}
