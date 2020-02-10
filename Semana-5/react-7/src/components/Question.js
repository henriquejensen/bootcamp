import React from "react";

import QuestionHeader from "./QuestionHeader";
import QuestionAnswer from "./QuestionAnswer";

export default function Question({
  question,
  questionsAnswereds,
  onAnswerQuestion
}) {
  const { answers, questionTitle, rightAnswer } = question;
  const selectedAnswer = questionsAnswereds[question.id];
  const style = {
    container: {
      marginTop: 15
    },
    answers: {
      listStyle: "none",
      padding: 0
    }
  };

  let dataTestAnswer = "";
  if (selectedAnswer !== undefined) {
    dataTestAnswer = selectedAnswer.isRight ? "correta" : "errada";
  }
  return (
    <div style={style.container} data-test="pergunta">
      <QuestionHeader question={questionTitle} />
      <ul style={style.answers} data-resposta={dataTestAnswer}>
        {answers.map(answer => {
          return (
            <QuestionAnswer
              key={answer.id}
              text={answer.text}
              selectedAnswer={selectedAnswer && selectedAnswer.answer}
              rightAnswer={rightAnswer}
              id={answer.id}
              onAnswerQuestion={() =>
                onAnswerQuestion(question.id, answer, rightAnswer)
              }
            />
          );
        })}
      </ul>
    </div>
  );
}
