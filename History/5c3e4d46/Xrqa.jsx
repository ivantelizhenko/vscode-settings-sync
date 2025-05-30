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

function useData() {
  const context = useContext(DataContext);

  if (context === undefined)
    throw new Error('Context was used outside of DataProvider');

  return context;
}

export { DataProvider, useData };
