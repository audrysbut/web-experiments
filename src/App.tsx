import React from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

export const App = () => {
  return (
    <Router basename="/">
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/sudoku">Sudoku solver</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <h1>root</h1>
          </Route>
          <Route path="/sudoku">
            <h1>Sudoku</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
