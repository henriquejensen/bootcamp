import React from "react";

import Title from "./components/Title";
import Input from "./components/Input";
import List from "./components/List";
import Container from "./components/Container";

function App() {
  const data = {
    id: 1,
    name: "carro",
    done: false
  };
  const data2 = {
    id: 2,
    name: "bike",
    done: false
  };
  const [input, setInput] = React.useState("");
  const [todos, setTodos] = React.useState([data, data2]);
  const handleChange = event => {
    setInput(event.target.value);
  };
  const handlePressEnter = event => {
    if (event.keyCode === 13) {
      console.log("Enter");
      const newTodos = todos.concat(input);
      //setTodos([...todos, input])
      setTodos(newTodos);
      setInput("");
    }
  };

  return (
    <Container>
      <section>
        <Title title="Todos" />
        <Input
          value={input}
          onChange={handleChange}
          onPressEnter={handlePressEnter}
        />
        <List todos={todos} />
      </section>
    </Container>
  );
}

export default App;
