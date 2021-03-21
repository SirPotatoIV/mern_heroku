import { createContext } from 'react';

const AuthContext = createContext({
  id: '',
  username: '',
  isLoggedIn: false,
});

export default AuthContext;
