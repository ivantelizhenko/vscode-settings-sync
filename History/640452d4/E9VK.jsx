import { createContext, useContext, useState } from "react";

const MAX_PHOTOS_LENGTH = 5;

const PageContext = createContext();

function PageProvider({ children }) {
  const [page, setPage] = useState(1);

  function handleIncrease(){
    setPage(page => if(page !== MAX_PHOTOS_LENGTH) page++)
  }

  return <PageContext.Provider>{children}</PageContext.Provider>;
}
