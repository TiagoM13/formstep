import React, { useRef } from 'react';
import { View, Text, TextInput } from 'react-native';
import { useForm } from 'react-hook-form';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { styles } from './styles'

export const FormStepOne = () => {
  const { control, handleSubmit, formState: { errors } } = useForm()
  const emailRef = useRef<TextInput>(null)

  function handleNextStep(data: any) {
    console.log(data)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar sua conta</Text>

      <Input
        icon='user'
        error={errors.name?.message}
        formProps={{ name: "name", control, rules: { required: "Nome é obrigatório" } }}
        inputProps={{
          placeholder: "Nome",
          onSubmitEditing: () => emailRef.current?.focus(),
          returnKeyType: "next"
        }}
      />

      <Input
        error={errors.email?.message}
        ref={emailRef}
        icon='mail'
        formProps={{
          name: "email", control, rules: {
            required: "E-mail é obrigatório",
            pattern: {
              value: /^[\w.-]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,6})+$/,
              message: "E-mail inválido."
            }
          }
        }}
        inputProps={{ placeholder: "E-mail", onSubmitEditing: handleSubmit(handleNextStep) }}
      />

      <Button title="Continuar" onPress={handleSubmit(handleNextStep)} />
    </View>
  );
}
