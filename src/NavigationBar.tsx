import React from "react";
import { Link } from "react-router-dom";
import "./NavigationBar.css";

export const NavigationBar = () => {
  return (
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
  );
};
