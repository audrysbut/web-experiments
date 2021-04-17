import React from "react";
import { HashRouter, Switch, Route, Link } from "react-router-dom";

export const App = () => {
  return (
    <HashRouter basename="/">
      <div>
        <h1>New routing 4</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <h1>root</h1>
          </Route>
          <Route path="/about">
            <h1>about</h1>
          </Route>
          <Route path="/users">
            <h1>users</h1>
          </Route>
        </Switch>
      </div>
    </HashRouter>
  );
};
