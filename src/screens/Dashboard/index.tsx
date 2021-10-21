// Libs
import React, { useEffect, useState } from "react";
import LottieView from "lottie-react-native";

// Styles
import { FlatList, View } from "react-native";
import { ExpenseCard } from "../../components/ExpenseCard";

// Components
import { ExpensesModal } from "../../components/ExpensesModal";

// Hooks
import { useAuthContext } from "../../hooks/useAuthContext";

// Api
import api from "../../services/api";
import { ExpenseType } from "../../types/expense.types";

// Styles
import {
  AddNewExpenseButton,
  AddNewExpenseIcon,
  Container,
  EmailText,
  ExpensesContainer,
  Header,
  ListText,
  LogOffButton,
  LogOffIcon,
  WelcomeText,
} from "./styles";

export function Dashboard() {
  const [expenses, setExpenses] = useState<ExpenseType[]>([]);
  const [page, setPage] = useState(1);
  const [selectedItem, setSelectedItem] = useState<ExpenseType | null>(null);

  const { user, signOut } = useAuthContext();

  async function loadExpenses() {
    const { data }: { data: ExpenseType[] } = await api.get(
      `/expenses?page=${page}&perPage=10`
    );
    if (page === 1 && expenses.length > 0) {
      return setExpenses([...data]);
    }
    setExpenses((allExpenses) => [...allExpenses, ...data]);
  }

  useEffect(() => {
    loadExpenses();
  }, [page]);

  useEffect(() => {
    setPage(1);
  }, []);

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const resetDashboardExpenses = () => {
    setPage(1);
    loadExpenses();
  };

  function handleEdit(item: ExpenseType) {
    setSelectedItem(item);
    toggleModal();
  }

  return (
    <Container>
      <Header>
        <View>
          <WelcomeText>Olá, seja bem vindo!</WelcomeText>
          <EmailText>{user?.email}</EmailText>
        </View>
        <LogOffButton onPress={signOut}>
          <LogOffIcon name="power" />
        </LogOffButton>
      </Header>
      <View>
        <ListText>Lista de despesas</ListText>
        <ExpensesContainer>
          {expenses.length < 1 ? (
            <LottieView
              source={require("../../assets/loading.json")}
              resizeMode="contain"
              loop
              autoPlay={true}
              style={{ width: 100 }}
            />
          ) : (
            <FlatList
              data={expenses}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item) => item._id}
              renderItem={({ item }) => (
                <ExpenseCard
                  item={item}
                  handleEdit={handleEdit}
                  resetDashboardExpenses={resetDashboardExpenses}
                />
              )}
              onEndReached={
                expenses.length >= 10 ? () => setPage(page + 1) : undefined
              }
              onEndReachedThreshold={expenses.length >= 10 ? 0.2 : undefined}
              contentContainerStyle={{ paddingBottom: 300 }}
            />
          )}
        </ExpensesContainer>
      </View>
      <ExpensesModal
        toggleModal={toggleModal}
        isVisible={isModalVisible}
        selectedItem={selectedItem as ExpenseType}
        setSelectedItem={setSelectedItem}
        resetDashboardExpenses={resetDashboardExpenses}
      />
      <AddNewExpenseButton onPress={toggleModal}>
        <AddNewExpenseIcon name="plus-circle" />
      </AddNewExpenseButton>
    </Container>
  );
}
