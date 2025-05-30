import { createContext, useContext } from "react";

const WorkoutContext = createContext(null);

function WorkoutProvider({}) {
  const value = {};

  return <WorkoutContext.Provider value={value}></WorkoutContext.Provider>;
}

function useWorkout() {
  const context = useContext(WorkoutContext);

  if (context === undefined)
    throw new Error("WorkputContext was used outside of the WorkoutProvider");

  return context;
}

export { WorkoutContext, WorkoutProvider, useWorkout };
