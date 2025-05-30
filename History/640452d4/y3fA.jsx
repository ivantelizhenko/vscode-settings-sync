import { createContext, useContext, useState } from "react";

const MAX_PHOTOS_LENGTH = 5;

const PageContext = createContext();

function PageProvider({ children }) {
  const [page, setPage] = useState(1);

  function handleIncrease() {
    setPage((page) => (page !== MAX_PHOTOS_LENGTH ? page++ : 1));
  }

  function handleDecrease() {
    setPage((page) => (page !== 1 ? page-- : 1));
  }

  return <PageContext.Provider>{children}</PageContext.Provider>;
}
