// Libs
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Button } from "react-native";
import Modal from "react-native-modal";

// Api
import api from "../../services/api";
import { ExpenseType } from "../../types/expense.types";

// Styles
import { ButtonsContainer, Container, Input, Title } from "./styles";

interface ExpensesModalProps {
  toggleModal: () => void;
  isVisible: boolean;
  selectedItem: ExpenseType;
  setSelectedItem: (item: ExpenseType | null) => void;
  resetDashboardExpenses: () => void;
}

export function ExpensesModal({
  toggleModal,
  isVisible,
  selectedItem,
  setSelectedItem,
  resetDashboardExpenses,
}: ExpensesModalProps) {
  const [description, setDescription] = useState("");
  const [expenseValue, setExpenseValue] = useState("");
  const [expenseDate, setExpenseDate] = useState(
    moment(new Date()).format("DD/MM/YYYY")
  );
  const [observation, setObservation] = useState<string | undefined>("");

  function setFields() {
    setDescription(selectedItem.item);
    setExpenseValue(selectedItem.value.toString());
    setExpenseDate(moment(new Date(selectedItem.date)).format("DD/MM/YYYY"));
    setObservation(selectedItem.additionalInfo.observation);
  }

  useEffect(() => {
    if (!!selectedItem) setFields();
  }, [selectedItem]);

  async function handleSubmit() {
    try {
      const data = {
        date: expenseDate.split("/").reverse().join("-"),
        item: description,
        value: parseFloat(expenseValue),
        additionalInfo: {
          observation,
        },
      };

      if (!!selectedItem) {
        await api.put(`expenses/${selectedItem._id}`, data);
      } else {
        await api.post("expenses", data);
      }

      resetDashboardExpenses();

      await clearAllField();
      toggleModal();
    } catch (error) {
      console.log(error);
    }
  }

  function clearAllField() {
    setSelectedItem(null);
    setDescription("");
    setExpenseValue("");
    setExpenseDate(moment(new Date()).format("DD/MM/YYYY"));
    setObservation("");
  }

  return (
    <Modal isVisible={isVisible}>
      <Container>
        <Title>{selectedItem ? "Editar" : "Adicionar"} despesa</Title>
        <Input
          placeholder="Descrição"
          value={description}
          onChangeText={setDescription}
        />
        <Input
          placeholder="Valor"
          keyboardType="numeric"
          value={expenseValue}
          onChangeText={setExpenseValue}
        />
        <Input
          placeholder="Data"
          keyboardType="numeric"
          value={expenseDate}
          onChangeText={setExpenseDate}
        />
        <Input
          placeholder="Observação"
          value={observation}
          onChangeText={setObservation}
        />

        <ButtonsContainer>
          <Button
            title={`${selectedItem ? "Atualizar" : "Lançar"} Despesa`}
            onPress={handleSubmit}
            color="#12a454"
          />
          <Button
            title="Cancelar"
            onPress={async () => {
              await clearAllField();
              toggleModal();
            }}
            color="#e83f5b"
          />
        </ButtonsContainer>
      </Container>
    </Modal>
  );
}
