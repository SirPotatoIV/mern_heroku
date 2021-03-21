import React, { useContext, useState } from 'react';
import AuthContext from '../context/AuthContext';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { currentUser, setCurrentUser } = useContext(AuthContext);
  console.log(currentUser);

  const handleLogin = (e) => {
    e.preventDefault();
    setCurrentUser({ ...currentUser, isLoggedIn: true });
  };
  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">E-mail: </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};
export default SignUp;
