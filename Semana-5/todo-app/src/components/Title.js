import React from "react";

export default function Title({ title }) {
  const style = {
    fontSize: 100,
    fontWeight: 100,
    margin: 20
  };
  return <h1 style={style}>{title}</h1>;
}
