import { useTimers } from '../store/timersContext';

export default function Timers() {
  const { timers } = useTimers();

  return <ul>{}</ul>;
}
