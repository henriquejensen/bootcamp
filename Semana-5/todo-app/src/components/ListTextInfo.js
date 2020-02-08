import React from "react";

export default function ListTextInfo({ number }) {
  const style = {
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    background: "white",
    color: "grey",
    fontSize: 16,
    padding: 20
  };

  if (!number) return null;
  return (
    <div style={style}>
      {number} {`item${number > 1 ? "s" : ""}`} left
    </div>
  );
}
