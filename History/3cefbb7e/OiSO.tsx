import { useEffect, useRef, useState } from 'react';
import { Timer as TimerProps } from '../store/timersContextTypes.ts';
import Container from './UI/Container.tsx';
import { useTimers } from '../store/timersContext.tsx';

export default function Timer({ name, duration }: TimerProps) {
  const interval = useRef<number | null>(null);
  const [remainingTime, setRemainingTime] = useState<number>(duration * 1000);
  const { isRunning, removeTimer } = useTimers();

  if (!isRunning && interval.current) {
    clearInterval(interval.current);
  }

  useEffect(() => {
    if (remainingTime <= 0 && interval.current) {
      removeTimer();
      clearInterval(interval.current);
    }
  }, []);

  useEffect(() => {
    if (!isRunning) return;
    const timer = setInterval(
      () =>
        setRemainingTime(curTime => (curTime <= 0 ? curTime : curTime - 50)),
      50
    );

    interval.current = timer;

    return () => clearInterval(timer);
  }, [isRunning]);

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
