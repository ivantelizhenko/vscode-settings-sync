import { createContext, useContext } from "react";

const PageContext = createContext();

function PageProvider({ children }) {
  return <PageContext.Provider>{children}</PageContext.Provider>;
}
