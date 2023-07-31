// Canvas.js
import React, { useState } from "react";

export default function Canvas(props) {
  const [square, setSquare] = useState(props.value);

  // if the square is clicked, value will change
  function handleClick() {
    setSquare((value) => !value);
  }

  //customized style for the squares
  const styles = { backgroundColor: square ? props.color : "transparent" };

  return <div onClick={handleClick} style={styles} className="square"></div>;
}
