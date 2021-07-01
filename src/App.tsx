import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import GlobalStyles from './styles/GlobalStyle';

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </>
  );
}
