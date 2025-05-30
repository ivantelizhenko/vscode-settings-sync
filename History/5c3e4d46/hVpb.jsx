import { createContext, useContext, useState } from 'react';

const CardsContext = createContext();

function CardProvider({ children }) {
  const [cards, setCards] = useState([]);

  return (
    <CardsContext.Provider value={{ cards, setCards }}>
      {children}
    </CardsContext.Provider>
  );
}

function useCard() {
  const context = useContext(CardsContext);

  if (context === undefined)
    throw new Error('Context was used outside of CardaProvider');

  return context;
}

export { CardProvider, useCard };
