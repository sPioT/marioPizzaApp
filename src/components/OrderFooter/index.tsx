import { CommonActions } from "@react-navigation/native";
import { useEffect, useState } from "react";
import Order from "../../models/Order";
import Pizza from "../../models/Pizza";
import PizzaService from "../../services/pizzaService";
import StyledButton from "../StyledButton";
import styles from "./styles";
import { Text, View } from "react-native";
import React from "react";

interface props {
  order: Order[];
  setOrder: Function;
  pizzas: Pizza[];
  navigation: any;
}

const OrderFooter = ({ order, setOrder, pizzas, navigation }: props) => {
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    let total = 0;

    console.log(order);

    order.forEach((item: Order) => {
      total +=
        item.quantity *
        pizzas.find((pizza: Pizza) => pizza.id === item.pizzaId).price;
    });

    setTotal(total);
  }, [order]);

  const saveOrder = () => {
    console.log(order);
    PizzaService.saveOrder(order).then((data) => {
      if (data) {
        setOrder([]);
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: "order" }],
          })
        );
        navigation.navigate("success", {
          message: "Votre commande est en cours de préparation.",
          message2: " Elle sera livrée dans 30 minutes.",
          linkLabel: "Retour à la page de commande",
        });
      }
    });
  };

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.total}>Total : {total.toFixed(2)} €</Text>
        <StyledButton onPress={() => saveOrder()} content="Valider" />
      </View>
    </View>
  );
};

export default OrderFooter;
