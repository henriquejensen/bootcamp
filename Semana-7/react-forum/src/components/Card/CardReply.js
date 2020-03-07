import React from "react";
import Image from "../Image";
import { formatDate } from "../../utils";

export default function CardReply({ reply }) {
  const { user, body, created_at } = reply;
  return (
    <div className="thread-footer-reply" data-test="resposta">
      <Image style={{ width: 50 }} />
      <div className="thread-footer-reply-content">
        <p>{user.name}</p>
        <p>{body}</p>
        <p>{formatDate(created_at)}</p>
      </div>
    </div>
  );
}
