import { TextInput } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: ${RFValue(300)}px;
  height: ${RFValue(200)}px;

  border-radius: 20px;

  background-color: ${({ theme }) => theme.colors.primary};
`;

export const LoginForm = styled.View`
  height: 50%;
  align-items: center;
  justify-content: space-between;
`;

export const FormInput = styled(TextInput)`
  height: ${RFValue(40)}px;
  width: ${RFValue(200)}px;
  padding-horizontal: ${RFValue(10)}px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const LoginButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  width: ${RFValue(200)}px;
  height: ${RFValue(30)}px;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const LoginText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.title};
`;

export const Error = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.attention};

  margin: 7px;
`;
