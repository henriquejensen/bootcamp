import React from "react";

export default function QuestionAnswer({
  text,
  rightAnswer,
  selectedAnswer,
  id,
  onAnswerQuestion
}) {
  const style = {
    container: {
      backgroundColor: "#f9faf7",
      padding: 15,
      marginTop: 5,
      borderRadius: 5,
      cursor: "pointer"
    }
  };

  if (selectedAnswer !== undefined) {
    style.container.color = "#9f9e9a";
    if (rightAnswer === id) {
      style.container.backgroundColor = "#3fea63";
      style.container.color = "white";
    } else if (selectedAnswer === id) {
      style.container.backgroundColor = "#ee245f";
      style.container.color = "white";
    }
  }
  return (
    <li data-test="opcao" style={style.container} onClick={onAnswerQuestion}>
      {text}
    </li>
  );
}
