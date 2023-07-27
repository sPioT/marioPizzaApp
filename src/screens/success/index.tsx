import React from "react";
import { useRoute } from "@react-navigation/native";
import { Pressable, Text, View } from "react-native";
import Header from "../../components/Header";
import styles from "./styles";

const SuccessScreen = ({ navigation }) => {
  const route = useRoute();
  const { message, message2, linkLabel }: any = route.params;

  return (
    <View style={styles.container}>
      <Header text="" />
      <Text style={styles.message}>{message}</Text>
      <Text style={styles.message}>{message2}</Text>
      <View style={styles.linkContainer}>
        <Pressable
          onPress={() => {
            navigation.navigate("order");
          }}
        >
          <Text style={styles.link}>{linkLabel}</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SuccessScreen;
