// Libs
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState, useContext } from "react";
import { Controller, useForm } from "react-hook-form";
import { Text } from "react-native";
import * as Yup from "yup";

// Context
import { AuthContext } from "../../contexts/auth";

// Styles
import {
  Container,
  Error,
  FormContainer,
  FormInput,
  LoginButton,
  LoginForm,
} from "./styles";

interface FormData {
  email: string;
}

const schema = Yup.object().shape({
  email: Yup.string()
    .email("E-mail inválido.")
    .required("Por favor digite um e-mail para continuar."),
});

export function Login() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
    },
  });
  const { signIn } = useContext(AuthContext);

  function onSubmit({ email }: FormData) {
    signIn(email);
  }

  return (
    <Container>
      <FormContainer>
        <LoginForm>
          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <FormInput
                placeholder="E-mail"
                allowFontScaling={false}
                autoCapitalize="none"
                value={value}
                onChangeText={onChange}
              />
            )}
            name="email"
          />
          {errors.email && <Error>{errors.email.message}</Error>}
          <LoginButton onPress={handleSubmit(onSubmit)}>
            <Text>Logar</Text>
          </LoginButton>
        </LoginForm>
      </FormContainer>
    </Container>
  );
}
