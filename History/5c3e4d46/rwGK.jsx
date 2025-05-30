import { createContext, useContext, useState } from 'react';

const CatssContext = createContext();

function CatssProvider({ children }) {
  const [catss, setCats] = useState([]);

  return (
    <CatssContext.Provider value={{ cats, setCats }}>
      {children}
    </CatssContext.Provider>
  );
}

function useCards() {
  const context = useContext(CardsContext);

  if (context === undefined)
    throw new Error('Context was used outside of CardaProvider');

  return context;
}

export { CardsProvider, useCards };
