import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Dashboard } from "../screens/Dashboard";

const AppStack = createStackNavigator();

const AppRoutes = () => (
  <AppStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <AppStack.Screen name="Dashboard" component={Dashboard} />
  </AppStack.Navigator>
);

export default AppRoutes;
