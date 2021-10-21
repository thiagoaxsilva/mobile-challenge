// Libs
import moment from "moment";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button } from "react-native";
import Modal from "react-native-modal";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// Api
import api from "../../services/api";
import { ExpenseType } from "../../types/expense.types";
import { InputForm } from "../InputForm";

// Styles
import { ButtonsContainer, Container, Title } from "./styles";

interface ExpensesModalProps {
  toggleModal: () => void;
  isVisible: boolean;
  selectedItem: ExpenseType;
  setSelectedItem: (item: ExpenseType | null) => void;
  resetDashboardExpenses: () => void;
}

interface FormData {
  date: string;
  description?: string;
  value: number;
  observation?: string;
}

const schema = Yup.object().shape({
  description: Yup.string(),
  value: Yup.number()
    .required("Por favor digite um valor")
    .positive("Digite um valor positivo"),
  observation: Yup.string(),
  date: Yup.string().required("Por favor digite uma data válida"),
});

export function ExpensesModal({
  toggleModal,
  isVisible,
  selectedItem,
  setSelectedItem,
  resetDashboardExpenses,
}: ExpensesModalProps) {
  const {
    control,
    handleSubmit,
    register,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      description: "",
      value: 0,
      date: moment(new Date()).format("DD/MM/YYYY"),
      observation: "",
    },
  });

  function setFields() {
    setValue("description", selectedItem.item);
    setValue("value", selectedItem.value);
    setValue("date", moment(new Date(selectedItem.date)).format("DD/MM/YYYY"));
    setValue("observation", selectedItem.additionalInfo.observation);
  }

  useEffect(() => {
    if (!!selectedItem) setFields();
  }, [selectedItem]);

  async function handleRegister({
    date,
    description,
    value,
    observation,
  }: FormData) {
    try {
      const data = {
        date: date.split("/").reverse().join("-"),
        item: description,
        value: value,
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

      setSelectedItem(null);
      reset();
      toggleModal();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Modal isVisible={isVisible}>
      <Container>
        <Title>{selectedItem ? "Editar" : "Adicionar"} despesa</Title>
        <InputForm
          name="description"
          control={control}
          placeholder="Descrição"
          innerRef={register}
          error={errors.description && errors.description.message}
        />
        <InputForm
          name="value"
          control={control}
          placeholder="Valor"
          keyboardType="numeric"
          innerRef={register}
          error={errors.value && errors.value.message}
        />
        <InputForm
          name="date"
          control={control}
          placeholder="Data"
          keyboardType="numeric"
          innerRef={register}
          error={errors.date && errors.date.message}
        />
        <InputForm
          name="observation"
          control={control}
          placeholder="Observação"
          innerRef={register}
          error={errors.observation && errors.observation.message}
        />

        <ButtonsContainer>
          <Button
            title={`${selectedItem ? "Atualizar" : "Lançar"} Despesa`}
            onPress={handleSubmit(handleRegister)}
            color="#12a454"
          />
          <Button
            title="Cancelar"
            onPress={async () => {
              setSelectedItem(null);
              reset();
              toggleModal();
            }}
            color="#e83f5b"
          />
        </ButtonsContainer>
      </Container>
    </Modal>
  );
}
