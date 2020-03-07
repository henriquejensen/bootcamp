import React from "react";
import { Link } from "react-router-dom";
import { previewText } from "../../utils";

export default function CardBody({ body, hasMore, slug }) {
  return (
    <div className="thread-body">
      <p>{hasMore ? previewText(body) : body}</p>
      <p>
        {hasMore ? (
          <Link data-test="link" to={`/thread/${slug}`}>
            Continue lendo
          </Link>
        ) : (
          "Cool"
        )}
      </p>
    </div>
  );
}
