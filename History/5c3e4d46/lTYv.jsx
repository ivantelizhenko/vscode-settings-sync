import { createContext, useContext, useState } from 'react';

const CardsContext = createContext();

function DataProvider({ children }) {
  const [cards, setCards] = useState([]);

  return (
    <CardsContext.Provider value={{ cards, setCards }}>
      {children}
    </CardsContext.Provider>
  );
}

function useData() {
  const context = useContext(CardsContext);

  if (context === undefined)
    throw new Error('Context was used outside of DataProvider');

  return context;
}

export { DataProvider, useData };
