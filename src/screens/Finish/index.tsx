import React from 'react';
import { View, Text } from 'react-native';
import { useAccountForm } from '../../hooks/useAccountForm';

export const Finish: React.FC = () => {
  const { accountFormData } = useAccountForm();
  const { name, email, birth, phone, password, passwordConfirmation } = accountFormData;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 18 }}>Nome: {name}</Text>
      <Text style={{ fontSize: 18 }}>Email: {email}</Text>
      <Text style={{ fontSize: 18 }}>Data de nascimento: {birth}</Text>
      <Text style={{ fontSize: 18 }}>Telefone: {phone}</Text>
      <Text style={{ fontSize: 18 }}>Senha: {password} / {passwordConfirmation}</Text>
    </View>
  );
}
