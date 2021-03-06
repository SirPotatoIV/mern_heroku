import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import About from './pages/About';
import Home from './pages/Home';
import PokeCenter from './pages/PokeCenter';
import Trainers from './pages/Trainers';

import AuthContext from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import Nav from './components/Nav';

import './App.css';

export default function App() {
  const [currentUser, setCurrentUser] = useState({
    id: '1',
    username: 'Jake',
    isLoggedIn: false,
  });

  return (
    <div className="App">
      <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
        <Router>
          <Nav />
          {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <PrivateRoute path="/pokecenter">
              <PokeCenter />
            </PrivateRoute>
            <PrivateRoute path="/trainers">
              <Trainers />
            </PrivateRoute>
            <Route path="/">
              {currentUser.isLoggedIn ? <Redirect to="pokecenter" /> : <Home />}
            </Route>
          </Switch>
        </Router>
      </AuthContext.Provider>
    </div>
  );
}
