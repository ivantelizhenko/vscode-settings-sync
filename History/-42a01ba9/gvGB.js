import { createContext, useEffect } from "react";

function formatTime(date) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    year: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(date);
}

const TimeContext = createContext(null);

function WorkoutProvider({ children }) {
  const [time, setTime] = useState(formatTime(new Date()));

  // Will be be AM or PM

  const partOfDay = time.slice(-2);

  useEffect(function () {
    const id = setInterval(function () {
      setTime(formatTime(new Date()));
    }, 1000);

    return () => clearInterval(id);
  }, []);
}
