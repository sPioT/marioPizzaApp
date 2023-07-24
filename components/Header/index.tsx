import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";

const Header = ({ text }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../assets/images/logo.png")}
      />
      <Text style={styles.title}>{text}</Text>
    </View>
  );
};

export default Header;
