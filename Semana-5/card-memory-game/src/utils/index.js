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
