import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import MealApp from "./MealApp.js";
import "bootstrap/dist/css/bootstrap.min.css";

const appRouting = (
  <Router>
    <Switch>
      <Route exact path="/" component={MealApp} />
    </Switch>
  </Router>
);

ReactDOM.render(appRouting, document.getElementById("root"));