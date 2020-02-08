import React from "react";

import Title from "./components/Title";
import Input from "./components/Input";
import Container from "./components/Container";
import List from "./components/List";
import ListTextInfo from "./components/ListTextInfo";

import "./App.css";

function App() {
  const [todos, setTodos] = React.useState([]);
  const [input, setInput] = React.useState("");

  const handleChangeInput = e => setInput(e.target.value);
  const handleDelete = id => setTodos(todos.filter(t => t !== id));

  const handleSubmit = e => {
    if (e.keyCode === 13 && input) {
      setTodos([...todos, input]);
      setInput("");
    }
  };

  React.useEffect(() => {
    document.addEventListener("keydown", handleSubmit);
    return () => {
      document.removeEventListener("keydown", handleSubmit);
    };
  });

  return (
    <div className="App">
      <Container>
        <Title title="Todos" />
        <div style={{ boxShadow: "10px 10px 10px lightgrey" }}>
          <Input
            type="text"
            placeholder="What needs to be done?"
            value={input}
            onChange={handleChangeInput}
          />
          <List todos={todos} onDelete={handleDelete} />
          <ListTextInfo number={todos.length} />
        </div>
      </Container>
    </div>
  );
}

export default App;
