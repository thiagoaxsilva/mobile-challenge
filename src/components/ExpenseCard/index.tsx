//Libs
import moment from "moment";
import React, { useState } from "react";
import { Text, View, TouchableOpacity, Button } from "react-native";
import Modal from "react-native-modal";

// Api
import api from "../../services/api";
import { ExpenseType } from "../../types/expense.types";

// Styles
import {
  Container,
  ExpenseDate,
  Title,
  Value,
  InfoContainer,
  EditIcon,
  DeleteIcon,
  TitleContainer,
  ActionContainer,
  ModalContainer,
  AlertText,
} from "./styles";

interface ExpenseCardProps {
  item: ExpenseType;
  handleEdit: (item: ExpenseType) => void;
  resetDashboardExpenses: () => void;
}
export function ExpenseCard({
  item,
  handleEdit,
  resetDashboardExpenses,
}: ExpenseCardProps) {
  const [deleteModalVisibility, setDeleteModalVisibility] = useState(false);

  async function handleDelete() {
    api.delete(`expenses/${item._id}`);
    resetDashboardExpenses();
    setDeleteModalVisibility(false);
  }

  const toggleModal = () => {
    setDeleteModalVisibility(!deleteModalVisibility);
  };

  return (
    <>
      <Container>
        <TitleContainer>
          <Title>{item.item}</Title>
          <ActionContainer>
            <TouchableOpacity onPress={() => handleEdit(item)}>
              <EditIcon name="edit" />
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleModal}>
              <DeleteIcon name="close" />
            </TouchableOpacity>
          </ActionContainer>
        </TitleContainer>

        <InfoContainer>
          <Value>R$ {item.value}</Value>
          <ExpenseDate>
            Data lançamento:
            {moment(new Date(item.date)).format("DD/MM/YYYY")}
          </ExpenseDate>
        </InfoContainer>
      </Container>
      <Modal isVisible={deleteModalVisibility}>
        <ModalContainer>
          <AlertText>Você deseja realmente deletar essa despesa?</AlertText>
          <View>
            <Button title="Sim" onPress={handleDelete} color="#12a454" />
            <Button title="Não" onPress={toggleModal} color="#e83f5b" />
          </View>
        </ModalContainer>
      </Modal>
    </>
  );
}
