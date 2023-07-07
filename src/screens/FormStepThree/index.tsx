import React, { useRef } from 'react';
import { View, Text, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { AccountProps } from '../../contexts/AccountFormContext';
import { useAccountForm } from '../../hooks/useAccountForm';

import { styles } from './styles'

export const FormStepThree = () => {
  const { navigate } = useNavigation()
  const { updateFormData } = useAccountForm()
  const { control, handleSubmit, formState: { errors }, getValues } = useForm<AccountProps>()
  const passwordConfirmationRef = useRef<TextInput>(null)

  function handleNextStep(data: AccountProps) {
    updateFormData(data)
    navigate("finish")
  }

  function validationPasswordConfirmation(passwordConfirmation: string) {
    const { password } = getValues()

    return password === passwordConfirmation || "As senhas devem ser iguais."
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha sua senha</Text>

      <Input
        icon='key'
        error={errors.password?.message}
        formProps={{
          name: "password",
          control,
          rules: {
            required: "Senha é obrigatória.",
            minLength: {
              value: 6,
              message: "Senha deve ter pelo menos 6 digitos."
            }
          }
        }}
        inputProps={{
          placeholder: "Senha",
          onSubmitEditing: () => passwordConfirmationRef.current?.focus(),
          returnKeyType: "next",
          secureTextEntry: true
        }}
      />

      <Input
        error={errors.passwordConfirmation?.message}
        ref={passwordConfirmationRef}
        icon='key'
        formProps={{
          name: "passwordConfirmation",
          control,
          rules: {
            required: "Confirme a senha.",
            validate: validationPasswordConfirmation
          }
        }}
        inputProps={{
          placeholder: "Confirme a senha",
          onSubmitEditing: handleSubmit(handleNextStep),
          secureTextEntry: true
        }}
      />

      <Button title="Continuar" onPress={handleSubmit(handleNextStep)} />
    </View>
  );
}
