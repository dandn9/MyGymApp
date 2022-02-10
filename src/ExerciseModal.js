import React, { useState } from "react";
import {
  Modal,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Pressable,
  TextInput,
  SafeAreaView,
  Button,
} from "react-native";

import styles from "./StyleSheet";
import ExerciseModal_ItemList from "./ExerciseModal_ItemList";
const ExerciseModal = (props) => {
  const [weight, setWeight] = useState(props.exercise.weight.toString());
  const [reps, setReps] = useState(props.exercise.reps.toString());
  const [sets, setSets] = useState(props.exercise.sets.toString());

  const touchHandlerOutside = () => {
    props.onCloseModal();
  };
  const submitHandler = () => {};

  return (
    <Modal
      style={styles.modalContainer}
      transparent={true}
      animationType="slide"
    >
      <Pressable onPressIn={touchHandlerOutside}>
        <View style={styles.modal_Outside_View}>
          <Pressable style={styles.modal_Inside_View}>
            <View style={styles.modalView}>
              <Text style={styles.modalView_Item}>{props.exercise.name}</Text>

              <ExerciseModal_ItemList
                value={weight}
                keyboardType="numeric"
                onChange={setWeight}
                notEditable="Kg"
              />

              <ExerciseModal_ItemList
                value={reps}
                keyboardType="numeric"
                onChange={setReps}
                notEditable="Reps"
              />
              <ExerciseModal_ItemList
                value={sets}
                keyboardType="numeric"
                onChange={setSets}
                notEditable="Sets"
              />
              <Button title="Submit" onPress={submitHandler}></Button>
            </View>
          </Pressable>
        </View>
      </Pressable>
    </Modal>
  );
};
export default ExerciseModal;
