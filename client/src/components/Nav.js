import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

import AuthContext from '../context/AuthContext';

import './Nav.css';

const Nav = () => {
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const history = useHistory();

  const handleSignout = () => {
    setCurrentUser({ ...currentUser, isLoggedIn: false });
    history.push('/');
  };

  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/">Login</Link>
        </li>
        <li>
          <Link to="/pokecenter">PokeCenter</Link>
        </li>
        <li>
          <Link to="/trainers">Trainers</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        {currentUser.isLoggedIn && (
          <li>
            <button onClick={handleSignout}>Sign Out</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
