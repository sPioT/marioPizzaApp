import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: { marginTop: 50 },
  label: {
    color: "#fbc02c",
    fontSize: 28,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#FFFFFF",
    color: "#000000",
    fontSize: 26,
    marginBottom: 10,
    padding: 5,
    borderRadius: 10,
  },
  link: {
    color: "#fbc02c",
    fontSize: 18,
    textAlign: "right",
    padding: 10,
    paddingRight: 0,
    textDecorationLine: "underline",
  },
  error: {
    borderColor: "red",
    borderWidth: 2,
  },
});

export default styles;
