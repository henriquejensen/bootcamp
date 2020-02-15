import React from "react";
import "./Heroe.css";

export default function Heroe({ heroe }) {
  const heroeImg = `${heroe.thumbnail.path}.${heroe.thumbnail.extension}`;
  return (
    <div className="heroe">
      <div>
        <img src={heroeImg} alt={`Ìmagem do ${heroe.name}`} />
      </div>
      <div>{heroe.name}</div>
    </div>
  );
}
