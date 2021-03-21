import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';

export default function PokeCenter() {
  const { username } = useContext(AuthContext);
  console.log(username);

  return (
    <div>
      <h2>PokeCenter</h2>
      <div>Welcome to the PokeCenter! Please check-in!</div>
    </div>
  );
}
