import { createContext } from 'react';

export const AuthContext = createContext({
  id: '',
  username: '',
  isLoggedIn: false,
});
