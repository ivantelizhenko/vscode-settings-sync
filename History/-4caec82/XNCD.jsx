import { createContext } from 'react';

const AuthContext = createContext();

function AuthProvider({ chidlren }) {
  return <AuthContext.Provider>{chidlren}</AuthContext.Provider>;
}
