import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { SudokuPage } from "./pages/sudoku-solver/SudokuPage";
import { NavigationBar } from "./NavigationBar";
import { RubikPage } from "./pages/rubik/RubikPage";
import { ClockPage } from "./pages/clock/ClockPage";
import { PuzzlePage } from "./pages/puzzle/PuzzlePage";
import { GraphPage } from "./pages/graph/graph-page";

export const App = () => {
  return (
    <Router basename="/web-experiments">
      <div>
        {/* TODO: export those router parameters and reuse them in Navigation bar */}
        <NavigationBar />
        <Switch>
          <Route exact path="/">
            <GraphPage />
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
          <Route exact path="/graph">
            <GraphPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
