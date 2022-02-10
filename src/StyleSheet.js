import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  input: {
    borderColor: "#000",
    borderWidth: 2,
    borderStyle: "solid",
  },
  modalContainer: {
    marginTop: 20,
  },
  modalView: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "auto",
    marginBottom: "auto",
    width: 100,
    height: 100,
    backgroundColor: "grey",
    shadowColor: "#000",
    shadowOffset: {
      width: 100,
      height: 50,
    },
    shadowOpacity: 0.9,
    shadowRadius: 5,
    elevation: 5,
  },
});

export default styles;
