import React, { createContext } from 'react';
import { render } from 'react-dom';

export const AuthContext = createContext({});

export default function ({ children }) {
  return (
    <>
      <AuthContext.Provider value={{ trainer: 'Jake' }}>
        {children}
      </AuthContext.Provider>
    </>
  );
}
