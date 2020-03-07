import React from "react";

export default function Card({ title, children, footer }) {
  return (
    <div className="container-thread" data-test="thread">
      <h2>{title}</h2>
      {children}
      {footer}
    </div>
  );
}
