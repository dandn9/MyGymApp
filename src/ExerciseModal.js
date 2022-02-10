import React from "react";
import { Modal, StyleSheet, View } from "react-native";
import styles from "./StyleSheet";
const ExerciseModal = (props) => {
  const touchHandlerOutside = () => {
    console.log("touched out");
  };
  const touchHandlerInside = () => {
    console.log("touched in");
  };
  return (
    <View onTouchStart={touchHandlerOutside}>
      <Modal
        style={styles.modalContainer}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.modalView} onTouchStart={touchHandlerInside}></View>
      </Modal>
    </View>
  );
};
export default ExerciseModal;
