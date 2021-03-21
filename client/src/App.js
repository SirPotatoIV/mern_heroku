import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import About from './pages/About';
import PokeCenter from './pages/PokeCenter';
import Trainers from './pages/Trainers';

import Nav from './components/Nav';

import './App.css';

export default function App() {
  return (
    <Router>
      <div>
        <Nav />

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/trainers">
            <Trainers />
          </Route>
          <Route path="/">
            <PokeCenter />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
