import {
  createContext,
  memo,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const TimeContext = createContext(null);

function TimeProvider({ children }) {
  // Will be be AM or PM

  const partOfDay = memo(time.slice(-2));

  const value = useMemo(() => {
    return {
      time,
      partOfDay,
    };
  }, [time, partOfDay]);

  return <TimeContext.Provider value={value}>{children}</TimeContext.Provider>;
}

function useTime() {
  const context = useContext(TimeContext);

  if (context === undefined)
    throw new Error("TimeContext was used outside of the TimeProvider");

  return context;
}

export { useTime, TimeContext, TimeProvider };
