import React, { useState } from 'react';
import Login from '../components/Login';
import SignUp from '../components/SignUp';

import './Home.css';

const Home = () => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <>
      {showLogin ? <Login /> : <SignUp />}
      <button
        className="loginSignup"
        onClick={() => {
          setShowLogin(!showLogin);
        }}
      >
        {showLogin ? 'Go to Sign Up' : 'Go to Login'}
      </button>
    </>
  );
};

export default Home;
