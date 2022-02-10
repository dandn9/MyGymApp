import React from "react";
import { View, TextInput } from "react-native";
import styles from "./StyleSheet";
const ExerciseModal_ItemList = (props) => {
  return (
    <View style={styles.modal_inLine}>
      <TextInput {...props} style={styles.modal_editable_true} />
      <TextInput editable={false} style={styles.modal_editable_false}>
        {props.notEditable}
      </TextInput>
    </View>
  );
};
export default ExerciseModal_ItemList;
