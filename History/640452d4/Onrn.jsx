import { createContext, useContext, useState } from "react";

const PageContext = createContext();

function PageProvider({ children }) {
  const [page, setPage] = useState(1);

  return <PageContext.Provider>{children}</PageContext.Provider>;
}
