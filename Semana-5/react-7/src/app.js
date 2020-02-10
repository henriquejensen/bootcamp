import React from "react";
import Container from "./components/Container";
import Header from "./components/Header";
import Question from "./components/Question";
import Done from "./components/Done";
import data from "./data/questions.json";

import "./app.css";

export default function App() {
  const [questionsAnswereds, setQuestionsAnswereds] = React.useState({});
  const [questions, setQuestions] = React.useState([]);

  const handleClickQuestion = (questionId, answer, rightAnswer) => {
    setQuestionsAnswereds({
      ...questionsAnswereds,
      [questionId]: {
        answer: answer.id,
        isRight: rightAnswer === answer.id
      }
    });
  };
  const handleClickRepeat = () => setQuestionsAnswereds({});

  React.useEffect(() => {
    setQuestions(data.questions);
  }, []);

  return (
    <Container>
      <Header
        title="Você consegue reconhecer as capitais desses países?"
        subtitle="Eu sei que você é capaz"
      />
      {questions.map((question, index) => {
        return (
          <Question
            key={index}
            question={question}
            questionsAnswereds={questionsAnswereds}
            onAnswerQuestion={handleClickQuestion}
          />
        );
      })}
      <Done
        questionsAnswereds={questionsAnswereds}
        questions={questions}
        onClickRepeat={handleClickRepeat}
      />
    </Container>
  );
}
