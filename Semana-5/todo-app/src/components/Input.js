import React from "react";

export default function Input({ type, placeholder, value, onChange }) {
  const style = {
    padding: 20,
    fontSize: 20,
    width: "100%",
    border: "none",
    borderBottom: "1px solid lightgrey"
  };
  return (
    <input
      type={type}
      placeholder={placeholder}
      style={style}
      value={value}
      onChange={onChange}
    />
  );
}
