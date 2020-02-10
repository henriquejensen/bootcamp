import React from "react";

export default function Button({ text, onClick }) {
  return (
    <button data-test="refazer" onClick={onClick}>
      {text}
    </button>
  );
}
