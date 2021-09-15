import React from "react";
import "../../src/Components/PhoneEntry.module.css";

export default function PhoneEntry(props) {
  return <input className="container" keyboardType="phone-pad" textContentType="telephoneNumber" />;
}
