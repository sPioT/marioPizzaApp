import { View } from "react-native";
import Header from "../../components/Header";
import Login from "../../components/Login";
import styles from "./styles";
import React from "react";

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header text="Connectez-vous" />
      <Login navigation={navigation} />
    </View>
  );
};

export default LoginScreen;
