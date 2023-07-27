import React from "react";
import { ImageBackground, Text, View } from "react-native";
import Quantity from "../Quantity";
import styles from "./styles";

const Pizza = (props) => {
  const { id, name, description, price, image } = props.item;

  const images = {
    "4fromages.jpg": require("../../../assets/images/4fromages.jpg"),
    "campagnarde.jpg": require("../../../assets/images/campagnarde.jpg"),
    "chevre-miel.jpg": require("../../../assets/images/chevre-miel.jpg"),
    "chicken-bbq.jpg": require("../../../assets/images/chicken-bbq.jpg"),
    "hawaienne.jpg": require("../../../assets/images/hawaienne.jpg"),
    "margherita.jpg": require("../../../assets/images/margherita.jpg"),
    "nordique.jpg": require("../../../assets/images/nordique.jpg"),
    "orientale.jpg": require("../../../assets/images/orientale.jpg"),
    "pepperoni.jpg": require("../../../assets/images/pepperoni.jpg"),
    "reine.jpg": require("../../../assets/images/reine.jpg"),
    "texan-bbq.jpg": require("../../../assets/images/texan-bbq.jpg"),
    "vegetarienne.jpg": require("../../../assets/images/vegetarienne.jpg"),
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.image}>
          <ImageBackground source={images[image]} style={styles.image} />
        </View>
        <View style={styles.descriptionBlock}>
          <Text style={styles.name}>{name}</Text>
          <Text>{description}</Text>
        </View>
      </View>
      <View style={styles.row}>
        <Quantity id={id} updateOrder={props.updateOrder} />
        <Text style={styles.price}>{price.toFixed(2)} €</Text>
      </View>
    </View>
  );
};

export default Pizza;
