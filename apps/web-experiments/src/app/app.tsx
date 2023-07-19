import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
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
        <Routes>
          <Route path="/sudoku" element={<SudokuPage />} />
          <Route path="/rubik" element={<RubikPage />} />
          <Route path="/clock" element={<ClockPage />} />
          <Route path="/puzzle" element={<PuzzlePage />} />
          <Route path="/route" element={<RoutePage />} />
          <Route path="/graph" element={<GraphPage />} />
          <Route path="/" element={<GraphPage />} />
        </Routes>
      </Router>
    </div>
  );
};
