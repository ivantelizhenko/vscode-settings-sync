import { createContext, useContext, useState } from "react";

const PageContext = createContext();

function PageProvider({ children }) {
  const [page, setPage] = useState(1);

  function handleIncrease(){
    setPage(page => if(page !== PHOTOS_LENGTH))
  }

  return <PageContext.Provider>{children}</PageContext.Provider>;
}
