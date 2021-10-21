import React, { Ref } from "react";
import { TextInputProps } from "react-native";
import { Control, Controller } from "react-hook-form";

import { Input } from "../Input";

import { Container, Error } from "./styles";

interface InputFormProps extends TextInputProps {
  control: any;
  name: string;
  innerRef: Ref<any>;
  error?: string;
}

export function InputForm({
  control,
  name,
  innerRef,
  error,
  ...rest
}: InputFormProps) {
  return (
    <Container>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            onChangeText={onChange}
            value={value}
            ref={innerRef}
            {...rest}
          />
        )}
        name={name}
      />
      {error && <Error>{error}</Error>}
    </Container>
  );
}
