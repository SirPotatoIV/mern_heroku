import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
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
  );
};

export default Nav;
