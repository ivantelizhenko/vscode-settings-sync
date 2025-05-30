import { createContext } from "react";

const WorkoutContext = createContext(null);

function WorkoutProvider({}) {
  const value = {};

  return <WorkoutContext.Provider value={value}></WorkoutContext.Provider>;
}

function useWorkout() {
  const context = useContext(WorkoutContext);
}
