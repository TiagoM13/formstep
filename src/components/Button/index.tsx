import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { styles } from './styles';

type Props = TouchableOpacityProps & {
  title: string
}

export const Button = ({ title, ...rest }: Props) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7} {...rest}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
