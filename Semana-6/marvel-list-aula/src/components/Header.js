import React from "react";
import Input from "./Input";

export default function Header({ value, onChange, erro, onKeyPress }) {
  React.useEffect(() => {
    console.log("Header Atualizou");
  });

  return (
    <div>
      <Input
        value={value}
        onChange={onChange}
        erro={erro}
        onKeyPress={onKeyPress}
      />
    </div>
  );
}
