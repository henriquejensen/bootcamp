import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

const NotFoundComponent = styled.div`
  margin: 10px 20px;
`;

function NotFound() {
  return (
    <NotFoundComponent>
      <h2>Ops...</h2>
      <p>página não encontrada</p>
      <Link data-test="voltar" to="/" className="btn-link">
        {"<- Voltar para Home"}
      </Link>
    </NotFoundComponent>
  );
}

export default NotFound;
