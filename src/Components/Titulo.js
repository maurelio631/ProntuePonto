import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default (props) => {
  return (
    <div>
      <h2 style={styles.container}>{props.children}</h2>
    </div>
  );
};

const styles = StyleSheet.create({
  container: {
    textAlign: "center",
    fontSize: 24,
    marginLeft: 20,
    marginRight: 20,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 15,
  },
});
