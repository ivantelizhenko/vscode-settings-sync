import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

import clickSound from "./ClickSound.m4a";
import { useTime } from "./TimeContext";

const WorkoutContext = createContext(null);

function WorkoutProvider({ children }) {
  const [allowSound, setAllowSound] = useState(true);
  const { time, partOfDay } = useTime();
  // const [time, setTime] = useState(formatTime(new Date()));

  // Will be be AM or PM

  // const partOfDay = useMemo(() => time.slice(-2), [time]);

  const workouts = useMemo(
    () => [
      {
        name: "Full-body workout",
        numExercises: partOfDay === "AM" ? 9 : 8,
      },
      {
        name: "Arms + Legs",
        numExercises: 6,
      },
      {
        name: "Arms only",
        numExercises: 3,
      },
      {
        name: "Legs only",
        numExercises: 4,
      },
      {
        name: "Core only",
        numExercises: partOfDay === "AM" ? 5 : 4,
      },
    ],
    [partOfDay]
  );

  const handlePlaySound = useCallback(
    function () {
      if (!allowSound) return;
      const sound = new Audio(clickSound);
      sound.play();
    },
    [allowSound]
  );

  // useEffect(function () {
  //   const id = setInterval(function () {
  //     setTime(formatTime(new Date()));
  //   }, 1000);

  //   return () => clearInterval(id);
  // }, []);

  const value = useMemo(() => {
    return {
      time,
      allowSound,
      setAllowSound,
      workouts,
      onPlaySound: handlePlaySound,
    };
  }, [workouts, handlePlaySound, allowSound, time]);

  return (
    <WorkoutContext.Provider value={value}>{children}</WorkoutContext.Provider>
  );
}

function useWorkout() {
  const context = useContext(WorkoutContext);

  if (context === undefined)
    throw new Error("WorkoutContext was used outside of the WorkoutProvider");

  return context;
}

export { WorkoutContext, WorkoutProvider, useWorkout };
