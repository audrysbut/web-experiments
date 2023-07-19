import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NavigationBar.css';

export const NavigationBar = () => {
  const navigate = useNavigate();
  return (
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
  );
};
