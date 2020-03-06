import React from "react";
import styled from "styled-components";

const LoadingComponent = styled.div`
  text-align: center;
  margin: 50px;
`;

function Loading() {
  return <LoadingComponent>Loading...</LoadingComponent>;
}

export default Loading;
