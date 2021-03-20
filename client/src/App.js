import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

import About from './pages/About';
import PokeCenter from './pages/PokeCenter';
import Trainers from './pages/Trainers';

import './App.css';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">PokeCenter</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/trainers">Trainers</Link>
            </li>
          </ul>
        </nav>

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
