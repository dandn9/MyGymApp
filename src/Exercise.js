import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
const Exercise = (props) => {
  const Exercises = props.exercises.map((e) => {
    return (
      <View
        style={styles.container}
        onTouchStart={props.onTap.bind(this, e.id)}
        key={e.id}
      >
        <View style={styles.field}>
          <Text>{e.name}</Text>
        </View>
        <View style={styles.field}>
          <TextInput>{e.weight + " kg"}</TextInput>
        </View>
        <View style={styles.field}>
          <Text>{e.reps}</Text>
        </View>
        <View style={styles.field}>
          <Text>{e.sets}</Text>
        </View>
      </View>
    );
  });

  return <View>{Exercises}</View>;
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "grey",
  },
  field: {
    textAlign: "center",
    alignContent: "center",
    width: "25%",
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 1,
  },
});

export default Exercise;
