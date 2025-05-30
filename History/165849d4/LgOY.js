import { useWorkout } from "./WorkoutContext";

function Timer() {
  const { time } = useWorkout();

  return <time>For your workout on {time}</time>;
}

export default Timer;
