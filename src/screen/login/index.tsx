import React from "react";
import { View } from "react-native";
import Header from "../../src/components/Header";
import Login from "../../src/components/Login";
import styles from "./styles";

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header text="Connectez-vous" />
      <Login navigation={navigation} />
    </View>
  );
};

export default LoginScreen;
