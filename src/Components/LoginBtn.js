import React from "react";
import { StyleSheet, TouchableOpacity, Text, Platform } from "react-native";

export default (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.container}>
      <Text>{props.children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 40,
    color: "#000",
    borderWidth: 0,
    borderRadius: 15,
    marginTop:  20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#c1c1c1",
  },
});
