import React from "react";
import ListItem from "./ListItem";

export default function List({ todos = [], onDelete }) {
  const style = {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    listStyleType: "none",
    padding: 0,
    margin: 0
  };
  return (
    <ul style={style}>
      {todos.map((todo, index) => (
        <ListItem key={index} todo={todo} onDelete={onDelete} />
      ))}
    </ul>
  );
}
