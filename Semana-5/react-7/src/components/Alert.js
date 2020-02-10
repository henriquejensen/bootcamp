import React from "react";

export default function Alert({ children }) {
  const style = {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#dfdffe",
    borderLeft: "5px solid blue",
    borderRadius: 5,
    padding: 20
  };
  return <div style={style}>{children}</div>;
}
