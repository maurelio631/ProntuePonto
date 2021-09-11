import React from "react";
import { TextInput, StyleSheet } from "react-native";

export default (props) => (
  <TextInput
    style={styles.container}
    keyboardType="default"
    textContentType="none"
    placeholder={props.placeholder}
  />
);

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    backgroundColor: "#ffff",
    height: 40,
    width: 200,
    bottom: 10,
    textAlign: "center",
    borderRadius: 10,
    margin: 10,
  },
});
