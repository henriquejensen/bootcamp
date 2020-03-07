import React from "react";
import "./styles.css";

export default function Container({ children }) {
  return <section className="container">{children}</section>;
}
