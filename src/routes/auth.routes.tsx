import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Login } from "../screens/Login";

const AuthStack = createStackNavigator();

const AuthRoutes = () => (
  <AuthStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <AuthStack.Screen name="SignIn" component={Login} />
  </AuthStack.Navigator>
);

export default AuthRoutes;
