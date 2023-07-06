import React, { useRef } from 'react';
import { View, Text, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { styles } from './styles'

export const FormStepTwo = () => {
  const { navigate } = useNavigation()
  const { control, handleSubmit, formState: { errors } } = useForm()
  const phoneRef = useRef<TextInput>(null)

  function handleNextStep(data: any) {
    navigate("formStepThree")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Suas informações</Text>

      <Input
        icon='calendar'
        error={errors.birth?.message}
        formProps={{
          name: "birth",
          control,
          rules: {
            required: "Data de nascimento é obrigatória.",
            pattern: {
              value: /^(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,
              message: "Data de nascimento inválida."
            }
          }
        }}
        inputProps={{
          placeholder: "Data de nascimento",
          onSubmitEditing: () => phoneRef.current?.focus(),
          returnKeyType: "next"
        }}
      />

      <Input
        error={errors.phone?.message}
        ref={phoneRef}
        icon='phone'
        formProps={{
          name: "phone",
          control,
          rules: {
            required: "Telefone é obrigatório",
            pattern: {
              value: /^\(?\d{2}\)?[-.\s]?\d{4,5}[-.\s]?\d{4}$/,
              message: "Telefone inválido"
            }
          }
        }}
        inputProps={{
          placeholder: "Telefone",
          onSubmitEditing: handleSubmit(handleNextStep)
        }}
      />

      <Button title="Continuar" onPress={handleSubmit(handleNextStep)} />
    </View>
  );
}
