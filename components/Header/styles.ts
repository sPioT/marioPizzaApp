import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    paddingTop: 15,
    zIndex: 100,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
    backgroundColor: "#3b438b",
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  title: {
    color: "#fbc02c",
    fontSize: 32,
    fontWeight: "bold",
    textAlignVertical: "center",
    width: "80%",
  },
});

export default styles;
