import React, { Ref } from "react";
import { TextInputProps } from "react-native";

import { Container } from "./styles";

interface InputProps extends TextInputProps {
  ref: Ref<any>;
}

export function Input({ ref, ...rest }: InputProps) {
  return <Container ref={ref} {...rest} />;
}
