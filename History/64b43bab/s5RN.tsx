import { useTimers } from '../store/timersContext';
import Timer from './Timer';

export default function Timers() {
  const { timers } = useTimers();

  return (
    <ul>
      {timers.map(timer => (
        <li key={timer.name}>
          <Timer name={timer.name} duration={timer.duration} />
        </li>
      ))}
    </ul>
  );
}
