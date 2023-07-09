import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { SudokuPage } from './pages/sudoku-solver/SudokuPage';
import { NavigationBar } from './NavigationBar';
import { RubikPage } from './pages/rubik/RubikPage';
import { ClockPage } from './pages/clock/ClockPage';
import { PuzzlePage } from './pages/puzzle/PuzzlePage';
import { GraphPage } from './pages/graph/graph-page';
import { RoutePage } from './pages/route/RoutePage';

export const App = () => {
  return (
    <div>
      <Router basename="/">
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
          <Route path="/route">
            <RoutePage />
          </Route>
          <Route exact path="/graph">
            <GraphPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
