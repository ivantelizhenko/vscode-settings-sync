import { createContext, useContext, useState } from 'react';

const DataContext = createContext();

function DataProvider({ children }) {
  const [data, setData] = useState([]);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
}

function usePage() {
  const context = useContext(const DataContext = createContext();
);

  if (context === undefined)
    throw new Error('Context was used outside of PageProvider');

  return context;
}

export { PageProvider, usePage };
