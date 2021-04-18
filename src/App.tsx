import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { RootPage } from "./pages/root/RootPage";
import { SudokuPage } from "./pages/sudoku-solver/SudokuPage";
import { NavigationBar } from "./NavigationBar";
import { RubikPage } from "./pages/rubik/RubikPage";

export const App = () => {
  return (
    <Router basename="/">
      <div>
        <NavigationBar />
        <Switch>
          <Route exact path="/">
            <RootPage />
          </Route>
          <Route path="/sudoku">
            <SudokuPage />
          </Route>
          <Route path="/rubik">
            <RubikPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
