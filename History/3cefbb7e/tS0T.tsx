import { useEffect, useRef, useState } from 'react';
import { Timer as TimerProps } from '../store/timersContextTypes.ts';
import Container from './UI/Container.tsx';
import { useTimers } from '../store/timersContext.tsx';

export default function Timer({ name, duration }: TimerProps) {
  const interval = useRef<number | null>(null);
  const [remainingTime, setRemainingTime] = useState<number>(duration * 1000);
  // const { removeTimer } = useTimers();

  if (interval.current && interval.current <= 0) {
    clearInterval(interval.current);
  }

  useEffect(() => {
    const timer = setInterval(
      () => setRemainingTime(curTime => curTime - 50),
      50
    );
    interval.current = timer;

    return () => clearInterval(timer);
  }, [remainingTime]);

  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);

  return (
    <Container as="article">
      <h2>{name}</h2>
      <p>
        <progress max={duration * 1000} value={remainingTime} />
      </p>
      <p>{formattedRemainingTime}</p>
    </Container>
  );
}
