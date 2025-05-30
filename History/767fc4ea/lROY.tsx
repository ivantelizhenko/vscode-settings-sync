import { useTimers } from '../store/timersContext.tsx';
import Button from './UI/Button.tsx';

export default function Header() {
  const { isRunning } = useTimers();

  return (
    <header>
      <h1>ReactTimer</h1>

      <Button>{isRunning ? 'Stop' : 'Start'} Timers</Button>
    </header>
  );
}
