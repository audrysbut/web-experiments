import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './NavigationBar.css';
import { ClockPage } from './pages/clock/ClockPage';
import { GraphPage } from './pages/graph/graph-page';
import { PuzzlePage } from './pages/puzzle/PuzzlePage';
import { RoutePage } from './pages/route/RoutePage';
import { RubikPage } from './pages/rubik/RubikPage';
import { SudokuPage } from './pages/sudoku-solver/SudokuPage';

export const NavigationBar = () => {
  const navigate = useNavigate();
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th className="th" onClick={() => navigate('/rubik')}>
              Rubik
            </th>
            <th className="th" onClick={() => navigate('/sudoku')}>
              Sudoku solver
            </th>
            <th className="th" onClick={() => navigate('/clock')}>
              Clock
            </th>
            <th className="th" onClick={() => navigate('/puzzle')}>
              Puzzle
            </th>
            <th className="th" onClick={() => navigate('/graph')}>
              Graph
            </th>
            <th className="th" onClick={() => navigate('/route')}>
              Route
            </th>
          </tr>
        </thead>
      </table>
      <Routes>
        <Route path="/sudoku" element={<SudokuPage />} />
        <Route path="/rubik" element={<RubikPage />} />
        <Route path="/clock" element={<ClockPage />} />
        <Route path="/puzzle" element={<PuzzlePage />} />
        <Route path="/route" element={<RoutePage />} />
        <Route path="/graph" element={<GraphPage />} />
        <Route path="/" element={<GraphPage />} />
      </Routes>
    </>
  );
};
