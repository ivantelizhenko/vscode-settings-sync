import { createContext, useContext } from 'react';

const AuthContext = createContext();

function AuthProvider({ chidlren }) {
function login = 

  return <AuthContext.Provider>{chidlren}</AuthContext.Provider>;
}

function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined)
    throw new Error('AuthContext was used outside AuthProvider');
  return context;
}

export { AuthProvider, useAuth };
