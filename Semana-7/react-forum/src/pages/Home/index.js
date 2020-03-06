import React from "react";
import "./styles.css";

import Container from "../../components/Container";
import { Card, CardBody, CardFooter } from "../../components/Card";
import Loading from "../../components/Loading";
import api from "../../api";

export default function Home() {
  const [threads, setThreads] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function getThreads() {
      const response = await api.getThreads();
      setThreads(response);
      setLoading(false);
    }
    getThreads();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return threads.map(thread => (
    <Container key={thread.id}>
      <Card id={thread.id} title={thread.title}>
        <CardBody body={thread.body} slug={thread.slug} hasMore />
        <CardFooter
          user={thread.user}
          created_at={thread.created_at}
          total_replies={thread.total_replies}
        />
      </Card>
    </Container>
  ));
}
