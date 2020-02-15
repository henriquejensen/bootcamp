import React from "react";

function Heroe({ heroi }) {
  const img = heroi.thumbnail.path + "." + heroi.thumbnail.extension;
  return (
    <div>
      <div>
        <img src={img} alt="" width={50} height={50} />
      </div>
      <div>
        <p>{heroi.name}</p>
      </div>
    </div>
  );
}

export default Heroe;
