import React from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import { SudokuPage } from "./pages/sudoku-solver/SudokuPage";

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
            <SudokuPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
