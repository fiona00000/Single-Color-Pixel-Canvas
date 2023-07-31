// App.js
import "./styles.css";
import React, { useState } from "react";
import Canvas from "./Canvas";

export default function App() {
  //initialize the size of canvas with id
  let idx = 0;
  const squareArr = new Array(2500)
    .fill()
    .map(() => ({ id: idx++, value: false, color: "#000000" }));

  //Set states of canvas and its color
  const [squares, setSquares] = useState(squareArr);
  const [selectedColor, setSelectedColor] = useState("#000000"); // Default color is black

  function toggle(id) {
    setSquares((prevSquares) => {
      return prevSquares.map((item) => {
        return item.id === id ? { ...item, value: !item.value } : item;
      });
    });
  }

  const squareElements = squares.map((item) => (
    <Canvas
      key={item.id}
      id={item.id}
      value={item.value}
      toggle={toggle}
      color={selectedColor}
    />
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
