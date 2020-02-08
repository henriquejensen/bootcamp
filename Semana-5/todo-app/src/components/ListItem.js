import React from "react";

export default function ListItem({ todo, onDelete }) {
  const [showDelete, setDelete] = React.useState(false);
  const [item, setItem] = React.useState(false);

  const style = {
    container: {
      display: "flex",
      alignItems: "center",
      width: "100%",
      background: "white",
      borderBottom: "0.5px solid lightgrey",
      color: "#282c34",
      padding: 20
    },
    text: {
      flex: 2,
      textAlign: "left",
      paddingLeft: 20,
      opacity: item ? 0.5 : 1,
      textDecoration: item ? "line-through" : "none"
    },
    delete: {
      fontSize: 20,
      textAlign: "center",
      color: "red",
      cursor: "pointer"
    },
    checkbox: {
      transform: "scale(1.5)"
    }
  };

  const handleMouseEnter = () => setDelete(true);
  const handleMouseLeave = () => setDelete(false);
  const handleCheckbox = e => setItem(e.target.checked);
  const handleDelete = () => onDelete(todo);

  return (
    <li
      style={style.container}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <input style={style.checkbox} type="checkbox" onClick={handleCheckbox} />
      <span style={style.text}>{todo}</span>
      <span style={style.delete} onClick={handleDelete}>
        {showDelete && "x"}
      </span>
    </li>
  );
}
