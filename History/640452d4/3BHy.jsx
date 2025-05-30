import { createContext, useContext, useState } from "react";

const MAX_PHOTOS_LENGTH = 5;

const PageContext = createContext();

function ({ children }) {
  const [page, setPage] = useState(1);

  function handleIncrease() {
    setPage((page) => (page !== MAX_PHOTOS_LENGTH ? page++ : 1));
  }

  function handleDecrease() {
    setPage((page) => (page !== 1 ? page-- : MAX_PHOTOS_LENGTH));
  }

  return (
    <PageContext.Provider value={(page, handleIncrease, handleDecrease)}>
      {children}
    </PageContext.Provider>
  );
}

function usePage() {
  const context = useContext(PageContext);

  if (context === undefined)
    throw new Error("Context was used outside of PageProvider");

  return context;
}

export {PageProvider, usePage}