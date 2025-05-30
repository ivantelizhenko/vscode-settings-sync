import { createContext, useContext, useState } from 'react';

const CardsContext = createContext();

function CardsProvider({ children }) {
  const [cards, setCards] = useState([]);

  return (
    <CardsContext.Provider value={{ cards, setCards }}>
      {children}
    </CardsContext.Provider>
  );
}

function useCards() {
  const context = useContext(CardsContext);

  if (context === undefined)
    throw new Error('Context was used outside of CardaProvider');

  return context;
}

export { CardsProvider, useCards };
