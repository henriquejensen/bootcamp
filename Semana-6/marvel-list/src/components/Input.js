import React from "react";
import "./Input.css";

export default function Input({ value, onChange, error }) {
  const hasError = Boolean(error);
  const errorStyle = hasError ? { borderColor: "red" } : {};
  return (
    <div className="input-group">
      <input
        type="text"
        placeholder="Digite o nome do personagem"
        value={value}
        onChange={onChange}
        style={errorStyle}
      />
      {hasError && <span className="error">{error}</span>}
    </div>
  );
}
