import { createContext, memo, useContext } from "react";
import { useTimeNow } from "./useTime";

const TimeContext = createContext(null);

function TimeProvider({ children }) {
  console.log(useTimeNow);
  const [time] = useTimeNow();

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
