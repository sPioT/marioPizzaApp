import { useEffect, useState } from "react";
import { View } from "react-native";
import Header from "../../components/Header";
import OrderFooter from "../../components/OrderFooter";
import PizzaList from "../../components/PizzaList";
import Order from "../../models/Order";
import Pizza from "../../models/Pizza";
import PizzaService from "../../services/pizzaService";
import styles from "./styles";
import React from "react";

const OrderScreen = ({ navigation }) => {
  const [pizzas, setPizzas] = useState<Pizza[]>([]);
  const [order, setOrder] = useState<Order[]>([]);

  const updateOrder = (id: number, quantity: number) => {
    let newOrder = order.filter((pizza) => pizza.pizzaId !== id);

    if (quantity > 0) newOrder.push(new Order(id, quantity));
    setOrder(newOrder);
  };

  useEffect(() => {
    PizzaService.loadPizzas().then((pizzas) => setPizzas(pizzas));
  }, []);

  return (
    <View style={styles.container}>
      <Header text="Passez votre commande" />
      <PizzaList
        pizzas={pizzas}
        updateOrder={updateOrder}
        navigation={navigation}
      />
      <OrderFooter
        pizzas={pizzas}
        order={order}
        setOrder={setOrder}
        navigation={navigation}
      />
    </View>
  );
};

export default OrderScreen;
