import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, Modal } from "react-native";
import Exercise from "./src/Exercise";
import Header from "./src/Header";
import styles from "./src/StyleSheet";

const exercises = [
  {
    name: "Squat",
    weight: 58,
    reps: 10,
    sets: 4,
    id: 1,
  },
  {
    name: "Bench",
    weight: 48,
    reps: 12,
    sets: 5,
    id: 2,
  },
];

export default function App() {
  const [openModal, setOpenModal] = useState({
    open: false,
    id: 0,
  });

  const clickOnExercise = (id) => {
    console.log(id);
    setOpenModal({ open: true, id });
  };

  return (
    <View style={styles.container}>
      <Header></Header>
      <Text>Lol</Text>
      <Button title="Hey"></Button>
      <StatusBar style="auto" />
      {openModal.open}
      <TextInput style={styles.input}></TextInput>
      <Exercise exercises={exercises} onTap={clickOnExercise}></Exercise>
    </View>
  );
}
