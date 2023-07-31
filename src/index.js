// Canvas.js
import React from "react";

export default function Canvas(props) {
  //customized style for the squares
  const styles = {
    backgroundColor: props.value ? props.color : "transparent"
  };
  return (
    <div
      style={styles}
      className="square"
      onClick={() => props.toggle(props.id)}
    ></div>
  );
}
