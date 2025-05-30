import { createContext, useContext, useState } from 'react';

const MAX_PHOTOS_LENGTH = 5;

const PageContext = createContext();

function PageProvider({ children }) {
  const [page, setPage] = useState(0);
  console.log(page);
  function handlePageIncrease() {
    setPage(page => (page === MAX_PHOTOS_LENGTH - 1 ? 0 : page + 1));
  }

  function handlePageDecrease() {
    setPage(page => (page === 0 ? MAX_PHOTOS_LENGTH - 1 : page - 1));
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
