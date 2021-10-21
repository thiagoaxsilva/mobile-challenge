// Libs
import React, { useState, useContext } from "react";
import { Text } from "react-native";

// Context
import { AuthContext } from "../../contexts/auth";

// Styles
import {
  Container,
  FormContainer,
  FormInput,
  LoginButton,
  LoginForm,
} from "./styles";

export function Login() {
  const { signIn } = useContext(AuthContext);
  const [email, onChangeEmail] = useState("");

  function onSubmit() {
    signIn(email);
  }

  return (
    <Container>
      <FormContainer>
        <LoginForm>
          <FormInput
            placeholder="E-mail"
            allowFontScaling={false}
            autoCapitalize="none"
            value={email}
            onChangeText={onChangeEmail}
          />
          <LoginButton onPress={onSubmit}>
            <Text>Logar</Text>
          </LoginButton>
        </LoginForm>
      </FormContainer>
    </Container>
  );
}
