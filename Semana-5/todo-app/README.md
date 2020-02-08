# Todo App

Descrição do desenvolvimento do Todo App

![Todo](https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2016/06/1466857427angular2-todo-app.gif)

- Criei a aplicação utilizando o create-react-app
  `npx create-react-app todo-app`

- Criei dentro da App a estrutura básica do componente

```jsx
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todos</h1>
        <section>
          <input type="text" placeholder="What needs to be done?" />
          <ul>
            <li>
              <div>
                <input type="checkbox" />
                <span>Item</span>
                <span>x</span>
              </div>
            </li>
          </ul>
          <div>1 item left</div>
        </section>
      </header>
    </div>
  );
}

export default App;
```

## Criando componentes

### Title

Criei o componente title para o titulo da pagina

```jsx
import React from "react";

export default function Title({ title }) {
  const style = {
    fontSize: 100,
    fontWeight: 100,
    margin: 20
  };
  return <h1 style={style}>{title}</h1>;
}
```

### Input

```jsx
import React from "react";

export default function Input({ type, placeholder }) {
  const style = {
    padding: 20,
    fontSize: 20,
    width: "100%",
    border: "none",
    borderBottom: "1px solid lightgrey"
  };
  return <input type={type} placeholder={placeholder} style={style} />;
}
```

### Container

```jsx
import React from "react";

export default function Container({ children }) {
  const style = {
    width: "60vh"
  };
  return <div style={style}>{children}</div>;
}
```

### List

```jsx
import React from "react";
import ListItem from "./ListItem";

export default function List({ todos = [] }) {
  const style = {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    listStyleType: "none",
    padding: 0,
    marginTop: 0
  };
  return (
    <ul style={style}>
      {todos.map((todo, index) => (
        <ListItem key={index} todo={todo} />
      ))}
    </ul>
  );
}
```

### ListItem

```jsx
import React from "react";
import Input from "./Input";

export default function ListItem() {
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
      padding: 10
    },
    text: {
      flex: 2,
      textAlign: "left",
      paddingLeft: 20,
      opacity: item ? 0.5 : 1,
      textDecoration: item ? "line-through" : "none"
    },
    delete: {
      width: 30,
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
  const handleDelete = () => console.log("Deleted");

  return (
    <li
      style={style.container}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <input style={style.checkbox} type="checkbox" onClick={handleCheckbox} />
      <span style={style.text}>Item</span>
      <span style={style.delete} onClick={handleDelete}>
        {showDelete && "x"}
      </span>
    </li>
  );
}
```

### ListTextInfo

```jsx
import React from "react";

export default function ListTextInfo({ number }) {
  const style = {
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    background: "white",
    color: "grey",
    fontSize: 16,
    padding: 20
  };

  if (!number) return null;
  return (
    <div style={style}>
      {number} {`item${number > 1 ? "s" : ""}`} left
    </div>
  );
}
```

### App

```jsx
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
```
