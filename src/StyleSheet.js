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
    width: 200,
    height: 200,
    backgroundColor: "#ededed",
    shadowColor: "#000",
    padding: 12,
    shadowOffset: {
      width: 100,
      height: 50,
    },
    shadowOpacity: 0.9,
    shadowRadius: 5,
    elevation: 5,
  },
  modalView_Item: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  modal_Inside_View: {
    marginTop: "auto",
    marginBottom: "auto",
    alignSelf: "center",
    backgroundColor: "#ff1453",
  },
  modal_Outside_View: {
    height: "100%",
  },
  modal_inLine: {
    flexDirection: "row",
    justifyContent: "flex-end",
    borderWidth: 1,
  },
  modal_editable_false: {
    color: "#000",
    marginRight: 10,
  },
  modal_editable_true: {
    flex: 1,
    marginLeft: 10,
  },
});

export default styles;
