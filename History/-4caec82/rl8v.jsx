import { createContext, useContext, useReducer } from 'react';

const AuthContext = createContext();

const initialState = {
  email: '',
  password: '',
};

function reducer() {}

function AuthProvider({ chidlren }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  function login(email, password) {}

  function logout() {}

  return <AuthContext.Provider>{chidlren}</AuthContext.Provider>;
}

function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined)
    throw new Error('AuthContext was used outside AuthProvider');
  return context;
}

export { AuthProvider, useAuth };
