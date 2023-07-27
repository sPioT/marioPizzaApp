import React from "react";
import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import AuthService from "../../services/authService";
import StyledButton from "../StyledButton";
import styles from "./styles";

const Login = ({ navigation }) => {
  const [telephone, setTelephone] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const handleSubmit = () => {
    AuthService.login(telephone, password)
      .then((data) => (data ? navigation.navigate("order") : null))
      .catch((error) => setError(true));
  };

  return (
    <View>
      <Text style={styles.label}>Téléphone</Text>
      <TextInput
        style={styles.input}
        placeholder="Votre téléphone"
        value={telephone}
        onChangeText={(text) => setTelephone(text)}
        keyboardType="phone-pad"
      />
      <Text style={styles.label}>Mot de passe</Text>
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="Votre mot de passe"
        value={password}
        onChangeText={(text) => setPassword(text)}
        returnKeyType="next"
      />
      <Pressable onPress={() => navigation.navigate("account")}>
        <Text style={styles.link}>Créer un compte</Text>
      </Pressable>
      <StyledButton onPress={() => handleSubmit()} content="Connexion" />
      {error ? (
        <Text style={styles.error}>
          Identifiant et/ou mot de passe incorrect
        </Text>
      ) : (
        <></>
      )}
    </View>
  );
};

export default Login;
