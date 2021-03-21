import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function PokeCenter() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { username } = useContext(AuthContext);
  console.log(username);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div>
      <h2>PokeCenter</h2>
      <div>Welcome to the PokeCenter! Please check-in!</div>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">E-mail: </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
