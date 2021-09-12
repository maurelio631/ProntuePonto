import React from "react";
import "PhoneEntry.css";

const PhoneEntry = (props) => (
  <input
    keyboardType="phone-pad"
    textContentType="telephoneNumber"
  />
);

export default PhoneEntry;