import React, { useRef } from 'react';
import { View, Text, TextInput } from 'react-native';
import { useForm } from 'react-hook-form';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { styles } from './styles'

export const FormStepOne = () => {
  const { control, handleSubmit } = useForm()
  const emailRef = useRef<TextInput>(null)

  function handleNextStep(data: any) {
    console.log(data)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar sua conta</Text>

      <Input
        icon='user'
        formProps={{ name: "name", control }}
        inputProps={{
          placeholder: "Nome",
          onSubmitEditing: () => emailRef.current?.focus(),
          returnKeyType: "next"
        }}
      />

      <Input
        ref={emailRef}
        icon='mail'
        formProps={{ name: "email", control }}
        inputProps={{ placeholder: "E-mail", onSubmitEditing: handleSubmit(handleNextStep) }}
      />

      <Button title="Continuar" onPress={handleSubmit(handleNextStep)} />
    </View>
  );
}
