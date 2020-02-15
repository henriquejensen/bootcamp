import React from "react";
import Heroe from "./Heroe";
import Title from "./Title";
import "./HeroesList.css";

export default function HeroesList({ heroes = [] }) {
  return (
    <section>
      <Title title={"Super-Heroís"} />
      <div className="heroes-list">
        {heroes.map(heroe => (
          <Heroe key={heroe.id} heroe={heroe} />
        ))}
      </div>
    </section>
  );
}
