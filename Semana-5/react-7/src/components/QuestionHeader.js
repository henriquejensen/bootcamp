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
