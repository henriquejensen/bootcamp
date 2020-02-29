import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HeroesList from "../components/HeroesList";
import NotFound from "../components/NotFound";

//{heroes.length ? <HeroesList heroes={heroes} /> : <NotFound />}

export default function Routes() {
  return (
    <Router>
      <Route exact path="/" component={HeroesList} />
      <Route exact path="/404" component={NotFound} />
    </Router>
  );
}
