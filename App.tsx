import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import AccountScreen from "./screen/account";
import LoginScreen from "./screen/login";
import OrderScreen from "./screen/order";
import SuccessScreen from "./screen/success";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="success" component={SuccessScreen} />
        <Stack.Screen name="order" component={OrderScreen} />
        <Stack.Screen name="account" component={AccountScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
