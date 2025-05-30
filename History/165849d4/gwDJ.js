import { useTimeNow } from "./useTime";

function Timer() {
  const [time] = useTimeNow();

  return <time>For your workout on {time}</time>;
}

export default Timer;
