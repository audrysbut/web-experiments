import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export const App = () => {
  return (
    <Router>
      <div>
        <h1>New router</h1>
        <nav>
          <ul>
            <li>
              <Link to="/web-experiments">Home</Link>
            </li>
            <li>
              <Link to="/web-experiments/about">About</Link>
            </li>
            <li>
              <Link to="/web-experiments/users">Users</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/web-experiments">
            <h1>root</h1>
          </Route>
          <Route path="/web-experiments/about">
            <h1>about</h1>
          </Route>
          <Route path="/web-experiments/users">
            <h1>users</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
