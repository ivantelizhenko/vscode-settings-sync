import { createContext, memo, useContext } from "react";
import { useTimeNow } from "./useTimeNow";

const TimeContext = createContext(null);

function TimeProvider({ children }) {
  const [time] = useTimeNow();

  return (
    <TimeContext.Provider value={partODay}>{children}</TimeContext.Provider>
  );
}

function useTime() {
  const context = useContext(TimeContext);

  if (context === undefined)
    throw new Error("TimeContext was used outside of the TimeProvider");

  return context;
}

export { useTime, TimeContext, TimeProvider };
