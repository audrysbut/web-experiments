import React from "react";
import { useHistory } from "react-router-dom";
import "./NavigationBar.css";

export const NavigationBar = () => {
  const history = useHistory();
  return (
    <table className="table">
      <thead>
        <tr>
          <th className="th" onClick={() => history.push("/rubik")}>
            Rubik
          </th>
          <th className="th" onClick={() => history.push("/sudoku")}>
            Sudoku solver
          </th>
          <th className="th" onClick={() => history.push("/clock")}>
            Clock
          </th>
          <th className="th" onClick={() => history.push("/puzzle")}>
            Puzzle
          </th>
          <th className="th" onClick={() => history.push("/graph")}>
            Graph
          </th>
          <th className="th" onClick={() => history.push("/route")}>
            Route
          </th>
        </tr>
      </thead>
    </table>
  );
};
