import React from "react";

export default function Container({ children }) {
  const style = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    children: {
      maxWidth: 1000
    }
  };
  return (
    <div style={style.container}>
      <div style={style.children}>{children}</div>
    </div>
  );
}
