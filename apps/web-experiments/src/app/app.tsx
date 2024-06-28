import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { NavigationBar } from './NavigationBar';

export const App = () => {
  return (
    <div>
      <Router basename="/">
        {/* TODO: export those router parameters and reuse them in Navigation bar */}
        <NavigationBar />
      </Router>
    </div>
  );
};
