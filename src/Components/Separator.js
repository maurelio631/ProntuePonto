import React from "react";
import { View, SafeAreaView, StyleSheet, Platform } from "react-native";

export default (props) => {
  return (
    <View style={styles.container}>
      <View  />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection:"column",
    backgroundColor: "black",
    height: 2,
    alignItems: "center",
    borderWidth: 1,
    width: 50,
    borderColor: "#c1c1c1",
    marginBottom: Platform.OS === "android" ? 20 : 0
  },
});
