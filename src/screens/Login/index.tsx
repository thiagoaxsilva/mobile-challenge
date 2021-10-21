// Libs
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState, useContext, useEffect } from "react";
import LottieView from "lottie-react-native";
import { Controller, useForm } from "react-hook-form";
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
  LoginText,
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
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
    signIn(email);
  }

  useEffect(() => {
    setLoading(false);
  }, []);

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
          {loading ? (
            <LottieView
              source={require("../../assets/loading.json")}
              resizeMode="contain"
              loop
              autoPlay={true}
              style={{ width: 100 }}
            />
          ) : (
            <LoginButton onPress={handleSubmit(onSubmit)}>
              <LoginText>Logar</LoginText>
            </LoginButton>
          )}
        </LoginForm>
      </FormContainer>
    </Container>
  );
}
