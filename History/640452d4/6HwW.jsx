import { createContext, useContext, useState } from 'react';
import { useCards } from './CardsContext';

const PageContext = createContext();

function PageProvider({ children }) {
  const [page, setPage] = useState(0);
  const { cards } = useCards();

  const pageNum = cards.length;

  function handlePageIncrease() {
    setPage(page => (page === pageNum - 1 ? 0 : page + 1));
  }

  function handlePageDecrease() {
    setPage(page => (page === 0 ? pageNum - 1 : page - 1));
  }

  return (
    <PageContext.Provider
      value={{ page, pageNum, handlePageIncrease, handlePageDecrease }}
    >
      {children}
    </PageContext.Provider>
  );
}

function usePage() {
  const context = useContext(PageContext);

  if (context === undefined)
    throw new Error('Context was used outside of PageProvider');

  return context;
}

export { PageProvider, usePage };
