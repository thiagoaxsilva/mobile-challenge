import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";

export const Container = styled.View`
  width: ${RFValue(300)}px;
  height: ${RFValue(100)}px;
  border-radius: 20px;
  margin-vertical: ${RFValue(5)}px;
  background-color: ${({ theme }) => theme.colors.shape};
  justify-content: space-around;

  font-family: ${({ theme }) => theme.fonts.regular};
  padding: 5px 15px;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ActionContainer = styled.View`
  width: 20%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const Title = styled.Text`
  font-size: ${RFValue(23)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const InfoContainer = styled.View`
  align-self: flex-end;
`;

export const Value = styled.Text`
  text-align: right;
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const ExpenseDate = styled.Text`
  font-size: ${RFValue(12)}px;
`;

export const EditIcon = styled(AntDesign)`
  font-size: ${RFValue(20)}px;
`;

export const DeleteIcon = styled(AntDesign)`
  font-size: ${RFValue(20)}px;
`;

export const ModalContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  height: ${RFValue(200)}px;
  padding: 2px 10px;
  justify-content: space-around;
`;

export const AlertText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(20)}px;
  text-align: center;
`;
