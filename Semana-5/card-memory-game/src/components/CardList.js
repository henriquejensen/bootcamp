import React from "react";

function CardList(props) {
  const styles = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start"
  };
  const { children } = props;
  return <div style={styles}>{children}</div>;
}

export default CardList;
