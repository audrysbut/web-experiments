import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { RootPage } from "./pages/root/RootPage";
import { SudokuPage } from "./pages/sudoku-solver/SudokuPage";
import { NavigationBar } from "./NavigationBar";
import { RubikPage } from "./pages/rubik/RubikPage";
import { ClockPage } from "./pages/clock/ClockPage";
import { PuzzlePage } from "./pages/puzzle/PuzzlePage";
import { GraphPage } from "./pages/graph/GraphPage";
import { SportPage } from "./pages/sport/SportPage";

export const App = () => {
  return (
    <Router basename="/">
      <div>
        {/* TODO: export those router parameters and reuse them in Navigation bar */}
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
          <Route path="/clock">
            <ClockPage />
          </Route>
          <Route path="/puzzle">
            <PuzzlePage />
          </Route>
          <Route path="/graph">
            <GraphPage />
          </Route>
          <Route path="/sport">
            <SportPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
