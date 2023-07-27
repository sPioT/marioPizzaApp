import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3b438b",
  },
  message: {
    color: "#fbc02c",
    fontSize: 38,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
  },
  linkContainer: {
    position: "absolute",
    bottom: 20,
  },
  link: {
    color: "#fbc02c",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
    textDecorationLine: "underline",
  },
});

export default styles;
