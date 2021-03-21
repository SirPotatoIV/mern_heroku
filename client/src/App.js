import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import About from './pages/About';
import Login from './pages/Login';
import PokeCenter from './pages/PokeCenter';
import Trainers from './pages/Trainers';

import { AuthContext } from './context/AuthContext';
import Nav from './components/Nav';

import './App.css';

export default function App() {
  const [currentUser, setCurrentUser] = useState({
    id: '1',
    username: 'Jake',
    isLoggedIn: false,
  });

  return (
    <AuthContext.Provider value={currentUser}>
      <Router>
        <div>
          <Nav />
          {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="pokecenter">
              <PokeCenter />
            </Route>
            <Route path="/trainers">
              <Trainers />
            </Route>
            <Route path="/">
              <Login />
            </Route>
          </Switch>
        </div>
      </Router>
    </AuthContext.Provider>
  );
}
