import React from "react";

export default function Container({ children }) {
  const style = {
    width: "60vh"
  };
  return <div style={style}>{children}</div>;
}
