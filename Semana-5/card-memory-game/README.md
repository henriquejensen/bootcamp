# Jogo da memória

Detalhes do desenvolvimento da seguinte aplicação

![Card](https://res.cloudinary.com/practicaldev/image/fetch/s--WcszYNVM--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://cdn-images-1.medium.com/max/880/1%2AffKgzZTBoHLdRXc4L0Pw_Q.gif)

- iniciei a aplicação com o create-react-app
  `npx create-react-app card-memory-game`

- no arquivo App.js removi tudo de dentro da header
- mudei o background da classe App-header: `background: linear-gradient(180deg, #09c8ba, #a480cc);`

- Primeira etapa eu criei o card e fiz o comportamento do click no card

```jsx
import React from "react";
import "./App.css";

function App() {
  const [showCard, setShowCard] = React.useState(false);
  const styles = {
    background: "#2e3d49",
    boxShadow: "3px 3px 3px rgba(0,0,0,.3)",
    borderRadius: "10px",
    width: 150,
    height: 150,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 15
  };
  if (showCard) {
    styles.background = "#02b3e4";
  }

  const handleClickCard = () => setShowCard(!showCard);

  return (
    <div className="App">
      <header className="App-header">
        <div style={styles} onClick={handleClickCard}>
          {showCard && <p>{"animal"}</p>}
        </div>
      </header>
    </div>
  );
}

export default App;
```

- Criei uma pasta chamada `components`, dentro dela criei um arquivo chamado Card.js e coloquei todo o código do Card que estava na App dentro deste arquivo. Na App fiz o import deste componente e mandei renderizar no lugar do código antigo do Card

- Criei uma pasta chamada `data`, dentro dela criei um arquivo chamado `data.json`, dentro dela criei um mock dos cards

```json
{
  "cards": [
    {
      "id": 1,
      "name": "fish"
    },
    {
      "id": 2,
      "name": "cat"
    },
    {
      "id": 3,
      "name": "crow"
    },
    {
      "id": 4,
      "name": "horse"
    },
    {
      "id": 5,
      "name": "spider"
    },
    {
      "id": 6,
      "name": "monkey"
    },
    {
      "id": 7,
      "name": "frog"
    },
    {
      "id": 8,
      "name": "dog"
    }
  ]
}
```

- Importei o `data.json` dentro da App e renderizei todos os cards utilizando o componente Card. Criei uma div para servir como container dos cards.

```jsx
import React from "react";
import Card from "./components/Card";
import cards from "./data/data.json";
import "./App.css";

function App() {
  const styles = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start"
  };
  return (
    <div className="App">
      <header className="App-header">
        <div style={styles}>
          {cards.cards.map((card, index) => (
            <Card key={index} />
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
```

- Criei dentro da pasta components o componente CardList e coloquei dentro dele o codigo que servia de container para os cards na App. Importei este componente dentro da App e coloquei no lugar do codigo antigo

- Criei a pasta `utils` e dentro dela criei um arquivo `index.js`. Dentro do arquivo criei a seguinte função. Esta função recebe um array de cards, duplica ele e depois embaralha os cards trocando-os de posição. Exportei esta função sem default pois quero usar esta função pelo nome dela

```js
export function createRandomCards(cards) {
  let doubleCards = [...cards, ...cards];
  doubleCards = doubleCards.map((c, index) => ({
    ...c,
    id: index
  }));
  let length = doubleCards.length;
  let newArray = [...doubleCards];

  doubleCards.map((c, index) => {
    let randomIndex = Math.floor(Math.random() * length);
    let aux = newArray[randomIndex];
    let current = newArray[index];
    newArray[randomIndex] = current;
    newArray[index] = aux;
    return c;
  });

  return newArray;
}
```

- Utilizei o createRandomCards dentro da App

```jsx
import React from "react";
import Card from "./components/Card";
import CardList from "./components/CardList";
import data from "./data/data.json";
import { createRandomCards } from "./utils";
import "./App.css";

function App() {
  const [cards, setCards] = React.useState(createRandomCards(data.cards));
  return (
    <div className="App">
      <header className="App-header">
        <CardList>
          {cards.map((card, index) => (
            <Card key={index} name={card.name} />
          ))}
        </CardList>
      </header>
    </div>
  );
}

export default App;
```

- Criei a lógica para adicionar um card quando encontrado

```jsx
import React from "react";
import Card from "./components/Card";
import CardList from "./components/CardList";
import data from "./data/data.json";
import { createRandomCards } from "./utils";
import "./App.css";

const randomCards = createRandomCards(data.cards);

function App() {
  const [cards, setCards] = React.useState(randomCards);
  const [selectedCards, setSelectedCards] = React.useState([]);

  const handleClickCard = card => {
    //Nao seleciona o mesmo cartão duas vezes
    if (selectedCards.find(c => c.id === card.id)) {
      return;
    }

    //Somente guarda dois cartões, se um terceiro vier, deleta os anteriores e guarda ele
    if (selectedCards.length < 2) {
      //Se o card clicado ja possui um par na lista, então a lista é zerada e o card é configurado para se mostrar na tela
      if (selectedCards.find(c => c.name === card.name)) {
        setSelectedCards([]);
        setCards(
          cards.map(c => {
            if (c.name === card.name) {
              c.show = true;
            }

            return c;
          })
        );
      }
      setSelectedCards([...selectedCards, card]);
    } else {
      setSelectedCards([card]);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <CardList>
          {cards.map((card, index) => (
            <Card
              key={index}
              card={card}
              selectedCards={selectedCards}
              handleClickCard={handleClickCard}
            />
          ))}
        </CardList>
      </header>
    </div>
  );
}

export default App;
```

- A lógica do Card para mostrar o cartão quando encontrado

```jsx
import React from "react";

function Card(props) {
  const { card, handleClickCard, selectedCards } = props;
  const styles = {
    background: "#2e3d49",
    boxShadow: "3px 3px 3px rgba(0,0,0,.3)",
    borderRadius: "10px",
    width: 150,
    height: 150,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 15
  };
  const findCard = selectedCards.find(c => c.id === card.id);
  const showCard = findCard || card.show;
  if (showCard) {
    styles.background = "#02b3e4";
  }

  return (
    <div style={styles} onClick={() => handleClickCard(card)}>
      {showCard && <p>{card.name}</p>}
    </div>
  );
}

export default Card;
```
