import React from "react";

function List(props) {
  return (
    <ul>
      {props.todos.map(todo => {
        return <li key={todo.id}>{todo.done + ""}</li>;
      })}
    </ul>
  );
}

export default List;
