import { useTimers } from '../store/TimersContext.tsx';
import Button from './UI/Button.tsx';

export default function Header() {
  const x = useTimers();
  console.log(x);

  return (
    <header>
      <h1>ReactTimer</h1>

      <Button>Stop Timers</Button>
    </header>
  );
}
