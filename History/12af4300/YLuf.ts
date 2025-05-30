import { ReactNode } from 'react';

export type Timer = {
  name: string;
  duration: number;
};

export type TimerState = {
  isRunning: boolean;
  timers: Timer[];
};

export type TimerContextValue = TimerState & {
  addTimer: (timerData: Timer) => void;
  startTimers: () => void;
  stopTimers: () => void;
};

export type TimerContextProviderProps = {
  children: ReactNode;
};
