import React from "react";

import Header from "./components/Header";
import Heroes from "./components/Heroes";

import { getCharacters, getCharactersName } from "./services/api";
import json from "./data/personagens.json";

function App() {
  const [entrada, setEntrada] = React.useState("");
  const [erro, setErro] = React.useState("");
  const [herois, setHerois] = React.useState([]);

  const handleChangeInput = ({ target }) => {
    const { value } = target;

    // Lógica para mostrar o erro quando for inválido
    // value não pode conter @ e --, senao da erro
    if (value.includes("@")) {
      setErro("Caracter inválido");
    } else if (value.includes("--")) {
      setErro("Proibido o caracter --");
    } else {
      setErro("");
    }

    setEntrada(value);
  };

  const handleKeyPress = event => {
    //lógica para quando o usuário da Enter
    //se for Enter, o app chama a api passando o valor do input como parametro
    //se der erro, coloca a lista de herois como vazia e mostra o erro no console
    if (event.key === "Enter") {
      getCharactersName(entrada)
        .then(json => setHerois(json.data.results))
        .catch(e => {
          console.log("Erro", e);
          setHerois([]);
        });
    }
  };

  React.useEffect(() => {
    //Depois de montar a tela o app consome a api
    // e coloca o resultado dentro do state de herois
    getCharacters()
      .then(json => setHerois(json.data.results))
      .catch(e => {
        console.log("Erro", e);
        setHerois([]);
      });

    //Le do json armazenado dentro da pasta data/personagens.json
    //setHerois(json.data.results);
  }, []);

  return (
    <div>
      <Header
        value={entrada}
        onChange={handleChangeInput}
        erro={erro}
        onKeyPress={handleKeyPress}
      />
      {herois.length ? (
        <Heroes herois={herois} />
      ) : (
        <p>
          404
          <br />
          Não encontrado
        </p>
      )}
    </div>
  );
}

export default App;
