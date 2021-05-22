import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import AmbitiousGame from "./pages/AmbitiousGame";
import Welcome from "./pages/Welcome";
import Finish from "./pages/Finish";

const AmbitiousRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/game" component={AmbitiousGame} />
        <Route exact path="/finish" component={Finish} />
      </Switch>
    </BrowserRouter>
  );
};

export default AmbitiousRouter;
