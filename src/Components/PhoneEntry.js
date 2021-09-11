import React from "react";
import { TextInput } from "react-native";

export default (props) => (
  <TextInput
    keyboardType="phone-pad"
    textContentType="telephoneNumber"
    style={{
      borderWidth: 1,
      backgroundColor: "#ffff",
      height: 40,
      bottom: 10,
      textAlign: "center",
      borderRadius: 10,
      margin: 20,
      width: props.width || 200,
    }}
  />
);
