import React from "react";

export default function Header({ title, subtitle }) {
  const style = {
    container: {
      backgroundColor: "#28a3e5",
      color: "white",
      width: "100%",
      padding: "50px 15px"
    },
    title: {
      margin: 0
    },
    subtitle: {
      margin: 0,
      color: "lightblue",
      fontSize: 23
    }
  };
  return (
    <div style={style.container}>
      <h1 style={style.title}>{title}</h1>
      <p style={style.subtitle}>{subtitle}</p>
    </div>
  );
}
