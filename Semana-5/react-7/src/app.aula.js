import React from "react";
import Container from "./components/Container";
import Header from "./components/Header";
import Question from "./components/Question";
import Done from "./components/Done";
//import data from "./data/questions.json";
import data from "./data/perguntas.json";

import "./app.css";

export default function App() {
  const [questionsAnswereds, setQuestionsAnswereds] = React.useState({});
  const [questions, setQuestions] = React.useState([]);

  const [perguntasRespondidas, setPerguntasRespondidas] = React.useState([]);

  const handleRespondidas = (pergunta, alternativaSelecionada) => {
    console.log(alternativaSelecionada);
    const novasRespondidas = perguntasRespondidas.concat({
      ...pergunta,
      alternativaSelecionada: alternativaSelecionada
    });
    setPerguntasRespondidas(novasRespondidas);
  };

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

      {data.perguntas.map(pergunta => {
        const respondida = perguntasRespondidas.filter(
          perg => perg.id === pergunta.id
        );
        let resposta = null;
        let repostaCerta = null;

        if (respondida.length > 0) {
          repostaCerta = respondida[0].respostaCerta;
          resposta = respondida[0].alternativaSelecionada.id;
        }

        return (
          <div>
            <h1>{pergunta.title}</h1>

            {pergunta.alternativas.map(alternativa => {
              const style = {
                color: "white",
                background: "wheat"
              };

              if (respondida.length) {
                if (alternativa.id === repostaCerta) {
                  style.background = "green";
                } else if (alternativa.id === resposta) {
                  style.background = "red";
                }
              }

              return (
                <ul key={alternativa.id}>
                  <li
                    style={style}
                    onClick={() => handleRespondidas(pergunta, alternativa)}
                  >
                    {alternativa.title}
                  </li>
                </ul>
              );
            })}
          </div>
        );
      })}
    </Container>
  );
}
