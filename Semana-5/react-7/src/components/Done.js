import React from "react";
import Alert from "./Alert";
import Button from "./Button";

export default function Done({ questionsAnswereds, questions, onClickRepeat }) {
  const total = questions.length;
  const totalAnswered = Object.values(questionsAnswereds);

  if (total && total !== totalAnswered.length) {
    return null;
  }

  const rightAnswers = totalAnswered.filter(a => a.isRight).length;

  return (
    <Alert data-resultado={rightAnswers}>
      <span>
        Você acertou {rightAnswers} de {total} perguntas!
      </span>
      <Button text="Refazer Quiz" onClick={onClickRepeat} />
    </Alert>
  );
}
