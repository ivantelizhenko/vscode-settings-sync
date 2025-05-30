import { createContext, useContext, useState } from 'react';

const MAX_PHOTOS_LENGTH = 5;

const PageContext = createContext();

function PageProvider({ children }) {
  const [curPage, setPage] = useState(1);

  function handlePageIncrease() {
    console.log(curPage);
    setPage(page => {
      console.log(page);
      return page === MAX_PHOTOS_LENGTH
        ? MAX_PHOTOS_LENGTH + 1 - MAX_PHOTOS_LENGTH
        : page + 1;
    });
  }

  function handlePageDecrease() {
    setPage(page => console.log(page));
  }

  return (
    <PageContext.Provider
      value={{ curPage, handlePageIncrease, handlePageDecrease }}
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
