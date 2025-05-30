import { useTimeNow } from "./useTimeNow";

function Timer() {
  const [time] = useTimeNow();

  return <time>For your workout on {time}</time>;
}

export default Timer;
