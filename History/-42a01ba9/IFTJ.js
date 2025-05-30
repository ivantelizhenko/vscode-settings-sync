import { createContext } from "react";

function formatTime(date) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    year: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(date);
}

const TimeContet = createContext(null);

function WorkoutProvider({ children }) {
  const [time, setTime] = useState(formatTime(new Date()));

  // Will be be AM or PM

  const partOfDay = time.slice(-2);
}
