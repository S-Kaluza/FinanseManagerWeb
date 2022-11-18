import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainTemplate from '../style/MainTemplate';
import mainNavigation from './config';

function RootNavigator() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainTemplate />}>
          {mainNavigation.map(({ path, component }) => {
            const thisComponent = React.createElement(component);
            return <Route key={path} path={path} element={thisComponent} />;
          })}
        </Route>
      </Routes>
    </Router>
  );
}

export default RootNavigator;
