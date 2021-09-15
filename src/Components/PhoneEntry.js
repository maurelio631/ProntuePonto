import React from "react";
import "../../src/Components/PhoneEntry.module.css";

export default function PhoneEntry(props) {
  return <input className="phoneEntry" keyboardType="phone-pad" textContentType="telephoneNumber" />;
}
