import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    margin: 10,
    flex: 1,
  },
  name: { fontSize: 20, fontWeight: "bold" },
  descriptionBlock: {
    flexShrink: 1,
    paddingHorizontal: 5,
    paddingTop: 0,
    marginTop: -5,
  },
  row: { flex: 1, flexDirection: "row" },
  description: { textAlign: "justify" },
  price: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0a590c",
    textAlign: "right",
  },
  image: { width: 150, height: 100, backgroundColor: "#AAA" },
});

export default styles;
