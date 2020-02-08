import React from "react";
import "./Container.css";

function Container(props) {
  return <div className="App">{props.children}</div>;
}

export default Container;
