import Button from './UI/Button.tsx';

export default function Header() {
  const { isRunning } = useTimers();
  console.log(isRunning);

  return (
    <header>
      <h1>ReactTimer</h1>

      <Button>Stop Timers</Button>
    </header>
  );
}
