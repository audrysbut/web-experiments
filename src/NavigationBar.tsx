import React from "react";
import { useHistory } from "react-router-dom";
import "./NavigationBar.css";

export const NavigationBar = () => {
  const history = useHistory();
  return (
    <table className="table">
      <thead>
        <tr>
          <th className="th" onClick={() => history.push("/")}>
            Home
          </th>
          <th className="th" onClick={() => history.push("/rubik")}>
            Rubik
          </th>
          <th className="th" onClick={() => history.push("/sudoku")}>
            Sudoku solver
          </th>
        </tr>
      </thead>
    </table>
  );
};
