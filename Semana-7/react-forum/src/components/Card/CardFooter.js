import React from "react";
import Image from "../Image";
import { formatDate } from "../../utils";

export default function CardFooter({ total_replies, user = {}, created_at }) {
  return (
    <div className="thread-footer">
      <Image style={{ width: 50 }} />
      <div className="thread-user-data">
        <p>{user.name}</p>
        <p>
          <span>Postado em:</span> {formatDate(created_at)}
        </p>
      </div>
      <div>
        <i>{total_replies}</i>
      </div>
    </div>
  );
}
