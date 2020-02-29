import React from "react";
import Input from "./Input";
import "./Header.css";

export default function Header({ input, onChange, error }) {
  return (
    <section className="header">
      <Input value={input} onChange={onChange} error={error} />
    </section>
  );
}
