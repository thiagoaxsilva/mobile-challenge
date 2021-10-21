import { TextInput } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled(TextInput)`
  width: 60%;
  font-size: ${RFValue(18)}px;
  border-bottom-width: 2px;
  border-bottom-color: ${({ theme }) => theme.colors.background};
  margin-bottom: 5px;
`;
