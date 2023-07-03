import React from 'react';
import { View, Text } from 'react-native';

import { Input } from '../../components/Input';

import { styles } from './styles'

export const FormStepOne = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar sua conta</Text>

      <Input icon='user' />
    </View>
  );
}
