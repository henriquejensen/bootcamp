import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Thread from "../pages/Thread";
import NotFound from "../pages/NotFound";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/thread/:slug" component={Thread} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}
