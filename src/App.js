// App.js
import "./styles.css";
import React, { useState } from "react";
import Canvas from "./Canvas";

export default function App() {
  let idx = 0;

  //initialize the size of canvas with id
  const squareArr = new Array(2500)
    .fill()
    .map(() => ({ id: idx++, value: false, color: "darkblue" }));

  const [squares, setSquares] = useState(squareArr);
  const [selectedColor, setSelectedColor] = useState("#000000"); // Default color is black

  const squareElements = squares.map((item) => (
    <Canvas key={item.id} value={item.value} color={selectedColor} />
  ));

  // Handle color change for the ColorPicker
  function handleColorChange(event) {
    setSelectedColor(event.target.value);
  }

  return (
    <div className="App">
      <h1>Simple Single-Color Pixel Canvas</h1>
      <label>Please select a color for your pixel art: </label>
      <input type="color" value={selectedColor} onChange={handleColorChange} />
      <hr />
      <div className="container">{squareElements}</div>
    </div>
  );
}
