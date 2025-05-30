import { createContext, useContext, useEffect, useMemo, useState } from "react";

import clickSound from "./ClickSound.m4a";

function formatTime(date) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    year: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(date);
}

const WorkoutContext = createContext(null);

function WorkoutProvider({ children }) {
  const [allowSound, setAllowSound] = useState(true);
  const [time, setTime] = useState(formatTime(new Date()));

  // Will be be AM or PM
  const partOfDay = time.slice(-2);

  const workouts = [
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
  ];

  const handlePlaySound = function () {
    if (!allowSound) return;
    const sound = new Audio(clickSound);
    sound.play();
  };

  useEffect(function () {
    const id = setInterval(function () {
      setTime(formatTime(new Date()));
    }, 1000);

    return () => clearInterval(id);
  }, []);

  const value = useMemo(function hey(){
    time,
    allowSound,
    setAllowSound,
    workouts,
    onPlaySound: handlePlaySound,
  },[partOfDay]);

  return (
    <WorkoutContext.Provider value={value}>{children}</WorkoutContext.Provider>
  );
}

function useWorkout() {
  const context = useContext(WorkoutContext);

  if (context === undefined)
    throw new Error("WorkputContext was used outside of the WorkoutProvider");

  return context;
}

export { WorkoutContext, WorkoutProvider, useWorkout };
