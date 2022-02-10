import React, { useState, useContext } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, Button, TextInput } from "react-native";
import Exercise from "./Exercise";
import ExerciseModal from "./ExerciseModal";
import Header from "./Header";
import styles from ".//StyleSheet";
import ExerciseContext from "./Context/exercise-ctx";

const App_InsideWrapper = (props) => {
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);
  const [openModal, setOpenModal] = useState({
    open: false,
    id: 0,
  });
  const ctx = useContext(ExerciseContext);
  const exercises = ctx.items;

  const clickOnExercise = (id) => {
    setOpenModal({ open: true, id });
  };
  const closeModal = () => {
    setOpenModal((prev) => {
      return { open: false, id: prev.id };
    });
  };

  return (
    <View style={styles.container}>
      <Header></Header>
      <Text>Lol</Text>
      <Button title="Hey"></Button>
      <StatusBar style="auto" />
      {openModal.open && (
        <ExerciseModal
          exercise={exercises.find((e) => e.id === openModal.id)}
          onCloseModal={closeModal}
        />
      )}
      <TextInput style={styles.input}></TextInput>
      <Exercise exercises={exercises} onTap={clickOnExercise}></Exercise>
    </View>
  );
};
export default App_InsideWrapper;
