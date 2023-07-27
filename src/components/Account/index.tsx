import React from "react";
import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import AuthService from "../../services/authService";
import StyledButton from "../StyledButton";
import styles from "./styles";
import Account from "../../models/Account";

const AccountForm = ({ navigation }) => {
  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [telephone, setTelephone] = useState<string>("");
  const [address, setAddress] = useState<string>("");

  const [errors, setErrors] = useState<string[]>([]);

  const isError = (input: string): any => {
    return errors.findIndex((item) => item === input) !== -1
      ? styles.error
      : {};
  };

  const telephoneRegex: RegExp = /^[0-9]{10}$/;

  const handleSubmit = () => {
    let temp: string[] = [];

    //test firstname
    if (firstname.length < 2) temp.push("firstname");

    //test lastname
    if (lastname.length < 2) temp.push("lastname");

    //text password
    if (password.length < 6) temp.push("password");
    if (password !== confirmPassword) temp.push("password");

    //test phonenumber
    if (!telephoneRegex.test(telephone)) temp.push("telephone");

    //test address
    if (address === "") temp.push("address");

    setErrors(temp);

    console.log(telephoneRegex.test(telephone));

    if (errors.length === 0) {
      const newAccount: Account = new Account(
        firstname,
        lastname,
        telephone,
        address,
        password
      );

      AuthService.createAccount(newAccount)
        .then(() => {
          if (AuthService.isLogged) {
            navigation.navigate("success", {
              message: "Félicitation !",
              message2: "Vous êtes prêt à commander.",
              linkLabel: "Passez votre première commande",
            });
          }
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nom</Text>
      <TextInput
        style={[styles.input, isError("lastname")]}
        placeholder="Votre nom"
        value={lastname}
        onChangeText={(text) => setLastname(text)}
      />
      <Text style={styles.label}>Prénom</Text>
      <TextInput
        style={[styles.input, isError("firstname")]}
        placeholder="Votre prénom"
        value={firstname}
        onChangeText={(text) => setFirstname(text)}
      />
      <Text style={styles.label}>Mot de passe</Text>
      <TextInput
        style={[styles.input, isError("password")]}
        secureTextEntry={true}
        placeholder="Votre mot de passe"
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Text style={styles.label}>Confirmation</Text>
      <TextInput
        style={[styles.input, isError("password")]}
        secureTextEntry={true}
        placeholder="Votre mot de passe"
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
      />
      <Text style={styles.label}>Téléphone</Text>
      <TextInput
        style={[styles.input, isError("telephone")]}
        placeholder="Votre téléphone"
        value={telephone}
        onChangeText={(text) => setTelephone(text)}
        keyboardType="phone-pad"
      />
      <Text style={styles.label}>Adresse</Text>
      <TextInput
        style={[styles.input, isError("address")]}
        placeholder="Votre adresse"
        value={address}
        onChangeText={(text) => setAddress(text)}
        multiline={true}
        numberOfLines={3}
        textAlignVertical="top"
      />

      <StyledButton onPress={() => handleSubmit()} content="Créer" />
    </View>
  );
};

export default AccountForm;
