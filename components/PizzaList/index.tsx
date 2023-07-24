import React, { useState, useEffect } from "react";
import { FlatList, Text, View } from "react-native";
import Pizza from "../Pizza";
import styles from "./styles";

const PizzaList = ({ pizzas, updateOrder, navigation }) => {
  return (
    <FlatList
      style={styles.container}
      data={pizzas}
      renderItem={({ item }) => <Pizza item={item} updateOrder={updateOrder} />}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={() => (
        <View
          style={{
            backgroundColor: "lightgrey",
            height: 4,
            width: "50%",
            alignSelf: "center",
            borderRadius: 2,
          }}
        />
      )}
    ></FlatList>
  );
};

export default PizzaList;
