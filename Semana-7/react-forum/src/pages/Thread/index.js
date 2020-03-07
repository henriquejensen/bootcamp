import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import "./styles.css";

import Container from "../../components/Container";
import { Card, CardBody, CardFooter, CardReply } from "../../components/Card";
import Loading from "../../components/Loading";
import api from "../../api";

export default function Home(props) {
  const { slug } = useParams();
  const [thread, setThread] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function getThread() {
      try {
        const response = await api.getThread(slug);
        setThread(response);
        setLoading(false);
      } catch (e) {
        console.log(`Error to get the thread ${e}`);
        setThread(null);
      }
    }
    getThread();
  }, [slug]);

  if (loading) {
    return <Loading />;
  }

  return (
    <Container>
      <Link to="/" className="btn-link">
        {"<- Voltar"}
      </Link>
      {!thread ? (
        <p>Nenhuma thread encontrada</p>
      ) : (
        <Card
          key={thread.id}
          id={thread.id}
          title={thread.title}
          slug={thread.slug}
        >
          <CardBody body={thread.body} />
          <CardFooter
            user={thread.user}
            created_at={thread.created_at}
            total_replies={thread.total_replies}
          />
          {thread.replies.map(reply => (
            <CardReply key={reply.id} reply={reply} />
          ))}
        </Card>
      )}
    </Container>
  );
}
