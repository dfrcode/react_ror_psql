import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import { Home, About, Contact } from "./components";

export const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </div>
  );
};
