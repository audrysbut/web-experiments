import React, { CSSProperties } from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import { RootPage } from "./pages/root/RootPage";
import { SudokuPage } from "./pages/sudoku-solver/SudokuPage";
import "./App.css";

export const App = () => {
  return (
    <Router basename="/">
      <div>
        <table className="table">
          <thead>
            <tr>
              <th className="th">
                <Link to="/">Home</Link>
              </th>
              <th className="th">
                <Link to="/sudoku">Sudoku solver</Link>
              </th>
            </tr>
          </thead>
        </table>
        <Switch>
          <Route exact path="/">
            <RootPage />
          </Route>
          <Route path="/sudoku">
            <SudokuPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
