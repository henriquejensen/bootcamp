import React from "react";

export default function Image({ style }) {
  return (
    <div style={style}>
      <img
        src="http://bulma.io/images/placeholders/128x128.png"
        alt="user profile"
        style={{ width: "100%", borderRadius: "50%" }}
      />
    </div>
  );
}
