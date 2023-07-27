import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AccountScreen from "./src/screens/account";
import LoginScreen from "./src/screens/login";
import OrderScreen from "./src/screens/order";
import SuccessScreen from "./src/screens/success";

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
