import React from "react";
import { View } from "react-native";
import Account from "../../components/Account";
import Header from "../../components/Header";
import styles from "./styles";

const AccountScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header text="Créez votre compte client" />
      <Account navigation={navigation} />
    </View>
  );
};

export default AccountScreen;
