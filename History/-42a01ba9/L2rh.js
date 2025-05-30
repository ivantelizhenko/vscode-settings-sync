import { createContext, memo, useContext } from "react";

const TimeContext = createContext(null);

function TimeProvider({ children }) {
  const partOfDay = memo(time.slice(-2));

  return (
    <TimeContext.Provider value={partOfDay}>{children}</TimeContext.Provider>
  );
}

function useTime() {
  const context = useContext(TimeContext);

  if (context === undefined)
    throw new Error("TimeContext was used outside of the TimeProvider");

  return context;
}

export { useTime, TimeContext, TimeProvider };
