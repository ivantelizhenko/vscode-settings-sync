import { createContext, useContext, useState } from 'react';

const MAX_PHOTOS_LENGTH = 5;

const PageContext = createContext();

function PageProvider({ children }) {
  const [page, setPage] = useState(1);

  function handlePageIncrease() {
    setPage(page => 100);
    console.log(page);
  }

  function handlePageDecrease() {
    setPage(page => console.log(page));
  }

  return (
    <PageContext.Provider
      value={{ page, handlePageIncrease, handlePageDecrease }}
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
