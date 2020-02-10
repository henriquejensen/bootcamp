# Descrição do desenvolvimento do projeto

- o projeto ja estava iniciado com o `create-react-app` porém não possuia nenhum arquivo
- criei os arquivos `index.html`, dentro da pasta `public` com um codigo a HTML basico e uma tag div co id "root", e um arquivo `index.js`, dentro da pasta `src` com um codigo Hello do React e o ReactDOM renderizando no id "root"
- rodei o script `npm start` e entre na url `localhost:3000`
- Separei o codigo Hello para um arquivo `app.js`
- Criei a pasta `components`
- Criei dentro da pasta `components` os componente: `Container`, `Header`, `Question`, `QuestionHeader`, `QuestionAnswer`, `Alert`, `Button`
- Utilizei o conceito de CSS inline para todos os componentes

## Extras

- adicionei a fonte Roboto na indext.html
- criei uma pasta chamada `assets` e coloquei a imagem de fundo da pergunta dentro dela
- criei um `app.css` e coloquei a font e o box-sizing, importei o arquivo na `app.js`

## Container

```jsx
import React from "react";

export default function Container({ children }) {
  const style = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    children: {
      maxWidth: 1000
    }
  };
  return (
    <div style={style.container}>
      <div style={style.children}>{children}</div>
    </div>
  );
}
```

## Header

A Header possui a seguinte estrutura:
![Print do design da Header](./design/header.png)

Ela tem um título em branco, um subtítulo em azul claro, tudo isso dentro de uma caixa azul

```jsx
import React from "react";

export default function Header({ title, subtitle }) {
  const style = {
    container: {
      backgroundColor: "#28a3e5",
      color: "white",
      width: "100%",
      padding: "50px 15px"
    },
    title: {
      margin: 0
    },
    subtitle: {
      margin: 0,
      color: "lightblue",
      fontSize: 23
    }
  };
  return (
    <div style={style.container}>
      <h1 style={style.title}>{title}</h1>
      <p style={style.subtitle}>{subtitle}</p>
    </div>
  );
}
```

## Question

A Question possui a seguinte estrutura:
![Print do design da Question](./design/question.png)

Comecei desenvolvendo somente uma question, separando ela em QuestionHeader e QuestionAnswer e importei ela dentro da `app.js`

### QuestionHeader

A QuestionHeader importa uma imagem, recebe o nome da questão como parametro, e renderiza eles na tela

```jsx
import React from "react";
import QuestionBackground from "../assets/question-background.jpg";

export default function QuestionHeader({ question }) {
  const style = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: 300,
      position: "relative"
    },
    img: {
      backgroundSize: "cover",
      backgroundRepeat: "round",
      filter: "brightness(0.7)",
      width: "100%",
      height: "100%"
    },
    title: {
      color: "white",
      fontSize: 50,
      position: "absolute",
      top: "25%"
    }
  };
  return (
    <div style={style.container}>
      <img style={style.img} src={QuestionBackground} alt="Mapa do mundo" />
      <h1 style={style.title}>{question}</h1>
    </div>
  );
}
```

### QuestionAnswer

Divide em algumas etapas

Na primeira apliquei os estilos da linha e na segunda apliquei a lógica para respondido ou não
A chamada do componente para teste ficou da seguinte forma:

```jsx
<QuestionAnswer
  text="Punta del este"
  selectedAnswer={2}
  rightAnswer={3}
  id={0}
/>
```

E o componente ficou da seguinte forma. O componente recebe o text da pergunta(text), o id da resposta certa(idRightAnswer), a resposta selecionada(selectedAnswer) e o id da pergunta. Se não houve resposta selecionada ela deve vir como null, dizendo ao componente que a pergunta não foi respondida ainda

```jsx
import React from "react";

export default function QuestionAnswer({
  text,
  idRightAnswer,
  selectedAnswer,
  id
}) {
  const style = {
    container: {
      backgroundColor: "#f9faf7",
      padding: 15,
      marginTop: 5,
      borderRadius: 5
    }
  };

  if (selectedAnswer !== null) {
    style.container.color = "#9f9e9a";
    if (idRightAnswer === id) {
      style.container.backgroundColor = "#3fea63";
      style.container.color = "white";
    } else if (selectedAnswer === id) {
      style.container.backgroundColor = "#ee245f";
      style.container.color = "white";
    }
  }
  return <li style={style.container}>{text}</li>;
}
```

### Question

O componente Question recebe a questão(question) como parametro e as questões respondidas(questionsAnswereds). A questão armazena todos os dados necessários para renderizar a questão e a questionsAnswereds é um objeto que se tiver o id da questão que esta sendo renderizada, significa que ela foi respondida.

```jsx
import React from "react";

import QuestionHeader from "./QuestionHeader";
import QuestionAnswer from "./QuestionAnswer";

export default function Question({ question, questionsAnswereds }) {
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
  return (
    <div style={style.container}>
      <QuestionHeader question={questionTitle} />
      <ul style={style.answers}>
        {answers.map(answer => {
          return (
            <QuestionAnswer
              key={answer.id}
              text={answer.text}
              selectedAnswer={selectedAnswer}
              rightAnswer={rightAnswer}
              id={answer.id}
            />
          );
        })}
      </ul>
    </div>
  );
}
```

## App

A app é o componente responsável por renderizar todas as questões e administrar o estado da aplicação. Na primeira parte renderizei a app da seguinte maneira.

Ela renderiza a Question passando um question como parametro e o objeto vazio de questionsAnswereds. O state armazena questionsAnswereds, pois para cada questão respondida ele deve atualizar.

```jsx
import React from "react";
import Container from "./components/Container";
import Header from "./components/Header";
import Question from "./components/Question";

import "./app.css";

export default function App() {
  const [questionsAnswereds, setQuestionsAnswereds] = React.useState({});
  const question = {
    id: 1,
    rightAnswer: 3,
    questionTitle: "Qual é a capital do Uruguay",
    answers: [
      {
        id: 0,
        text: "Punta del este"
      },
      {
        id: 1,
        text: "Colônia do Sacramento"
      },
      {
        id: 2,
        text: "Salto"
      },
      {
        id: 3,
        text: "Montevidéu"
      }
    ]
  };
  return (
    <Container>
      <Header
        title="Você consegue reconhecer as capitais desses países?"
        subtitle="Eu sei que você é capaz"
      />
      <Question question={question} questionsAnswereds={questionsAnswereds} />
    </Container>
  );
}
```

### Data

Criei um arquivo `questions.json` dentro da pasta `data` para armazenar os dados da questões

```json
{
  "questions": [
    {
      "id": 1,
      "rightAnswer": 1,
      "questionTitle": "Qual é a capital da Argentina",
      "answers": [
        { "id": 0, "text": "Mendoza" },
        { "id": 1, "text": "Buenos Aires" },
        { "id": 2, "text": "Bariloche" },
        { "id": 3, "text": "Ushuaia" }
      ]
    },
    {
      "id": 2,
      "rightAnswer": 2,
      "questionTitle": "Qual é a capital da Bolívia",
      "answers": [
        { "id": 0, "text": "Santa Cruz" },
        { "id": 1, "text": "Sucre" },
        { "id": 2, "text": "La Paz" },
        { "id": 3, "text": "Cochabamba" }
      ]
    },
    {
      "id": 3,
      "rightAnswer": 3,
      "questionTitle": "Qual é a capital do Uruguay",
      "answers": [
        { "id": 0, "text": "Punta del este" },
        { "id": 1, "text": "Colônia do Sacramento" },
        { "id": 2, "text": "Salto" },
        { "id": 3, "text": "Montevidéu" }
      ]
    }
  ]
}
```

### App refactor

Logo após isso fiz o refactor da App para ela utilizar os dados deste json. Como se trata de dados o uso do `useEffect` é aconselhavel neste caso.

```jsx
import React from "react";
import Container from "./components/Container";
import Header from "./components/Header";
import Question from "./components/Question";
import data from "./data/questions.json";

import "./app.css";

export default function App() {
  const [questionsAnswereds, setQuestionsAnswereds] = React.useState({});
  const [questions, setQuestions] = React.useState([]);

  const handleClickQuestion = (questionId, answerId) => {
    setQuestionsAnswereds({ ...questionsAnswereds, [questionId]: answerId });
  };

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
    </Container>
  );
}
```

Fiz a adição deste click nos componentes

`Question`

```jsx
return (
  <QuestionAnswer
    key={answer.id}
    text={answer.text}
    selectedAnswer={selectedAnswer}
    rightAnswer={rightAnswer}
    id={answer.id}
    onAnswerQuestion={() => onAnswerQuestion(question.id, answer.id)}
  />
);
```

`QuestionAnswer`

```jsx
<li style={style.container} onClick={onAnswerQuestion}>
```
