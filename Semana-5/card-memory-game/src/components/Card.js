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
    styles.background = card.show ? "#02ccba" : "#02b3e4";
  }

  return (
    <div style={styles} onClick={() => handleClickCard(card)}>
      {showCard && <p>{card.name}</p>}
    </div>
  );
}

export default Card;
