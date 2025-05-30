import { createContext, useContext, useState } from 'react';

const CatsContext = createContext();

function CatsProvider({ children }) {
  const [cats, setCats] = useState([]);

  return (
    <CatsContext.Provider value={{ cats, setCats }}>
      {children}
    </CatsContext.Provider>
  );
}

function useCats() {
  const context = useContext(CatsContext);

  if (context === undefined)
    throw new Error('Context was used outside of CatsProvider');

  return context;
}

export { CatsProvider, useCats };
