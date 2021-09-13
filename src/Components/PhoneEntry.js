import React from "react";
import "PhoneEntry.module.css";

const PhoneEntry = (props) => (
  <input
    keyboardType="phone-pad"
    textContentType="telephoneNumber"
  />
);

export default PhoneEntry;