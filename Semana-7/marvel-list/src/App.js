import React from "react";
import { fetchCharacters, fetchCharactersByName } from "./api/api";
import Container from "./components/Container";
import Header from "./components/Header";
import Routes from "./routes";

import "./App.css";

let timer = null;

function App() {
  const [heroes, setHeroes] = React.useState([]);
  const [input, setInput] = React.useState("");
  const [error, setError] = React.useState(null);
  React.useEffect(() => {
    fetchCharacters()
      .then(response => setHeroes(response.data.results))
      .catch(e => {
        console.log(e);
        setHeroes([]);
      });
  }, []);

  const validate = value => {
    if (value === "") {
      return "Valor não pode ser vazio";
    }
    if (value.includes("@")) {
      return "Valor não pode conter caracteres especiais";
    }

    return;
  };

  const handleChangeInput = event => {
    const { value } = event.target;
    setInput(value);
    setError(validate(value));

    clearTimeout(timer);
    timer = setTimeout(() => {
      fetchCharactersByName(value)
        .then(response => setHeroes(response.data.results))
        .catch(e => {
          console.log(e);
          setHeroes([]);
        });
    }, 500);
  };

  return (
    <Container>
      <Header input={input} onChange={handleChangeInput} error={error} />
      <Routes />
    </Container>
  );
}

export default App;
