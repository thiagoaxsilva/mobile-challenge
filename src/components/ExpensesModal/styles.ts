import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};

  justify-content: center;
  align-items: center;

  padding: 2px 5px;
  border-radius: 10px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.title};
  margin-bottom: 10px;
`;

export const Input = styled.TextInput`
  width: 60%;
  font-size: ${RFValue(18)}px;
  border-bottom-width: 2px;
  border-bottom-color: ${({ theme }) => theme.colors.background};
  margin-bottom: 5px;
`;

export const ButtonsContainer = styled.View`
  height: ${RFValue(100)}px;
  justify-content: space-around;
`;
