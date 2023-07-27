import { Text, View } from "react-native";
import NumericInput from "react-native-numeric-input";
import React from "react";

import styles from "./styles";

const Quantity = ({ id, updateOrder }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>quantité</Text>
      <NumericInput
        minValue={0}
        containerStyle={styles.quantity}
        inputStyle={styles.quantity}
        totalWidth={100}
        totalHeight={25}
        separatorWidth={0}
        onChange={(value) => updateOrder(id, value)}
        rounded={true}
      />
    </View>
  );
};

export default Quantity;
