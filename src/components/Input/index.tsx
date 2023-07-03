import React from 'react';
import { TextInput, View } from 'react-native';
import { Feather } from '@expo/vector-icons'

import { styles } from './styles';

type Props = {
  icon: keyof typeof Feather.glyphMap
}

export const Input = ({ icon }: Props) => {
  return (
    <View style={styles.group}>
      <View style={styles.icon}>
        <Feather name={icon} size={24} color='red' />
      </View>
      <TextInput style={styles.control} />
    </View>
  );
}
