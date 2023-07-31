// ColorPicker.js
import React from "react";

const ColorPicker = ({ color, onChange }) => {
  return <input type="color" value={color} onChange={onChange} />;
};

export default ColorPicker;
