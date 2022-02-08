import React from "react";
import { StyleSheet, View, Text } from "react-native";
const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 50,
    backgroundColor: "#000",
  },
});
export default Header;
