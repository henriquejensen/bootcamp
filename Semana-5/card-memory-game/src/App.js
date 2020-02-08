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
