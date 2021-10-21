import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
  position: relative;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  position: relative;
  width: 100%;
  height: ${RFPercentage(30)}px;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.primary};
`;

export const LogOffIcon = styled(Feather)`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${RFValue(24)}px;
`;

export const LogOffButton = styled.TouchableOpacity`
  position: absolute;
  top: 20%;
  right: 5%;
`;

export const AddNewExpenseButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 5%;
  right: 5%;
`;

export const AddNewExpenseIcon = styled(Feather)`
  color: ${({ theme }) => theme.colors.success};
  font-size: ${RFValue(40)}px;
`;

export const ExpensesContainer = styled.View`
  align-items: center;
`;

export const WelcomeText = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.shape};
  text-align: center;
`;

export const EmailText = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.title};
`;

export const ListText = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.title};
  text-align: center;
`;
