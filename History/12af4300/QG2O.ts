import { ReactNode } from 'react';

export type Timer = {
  name: string;
  duration: number;
};

export type TimersState = {
  isRunning: boolean;
  timers: Timer[];
};

export type TimerContextValue = TimersState & {
  addTimer: (timerData: Timer) => void;
  startTimers: () => void;
  stopTimers: () => void;
};

export type TimerContextProviderProps = {
  children: ReactNode;
};

export type Action = {
  type: 'ADD_TIMER' | 'START_TIMERS' | 'STOP_TIMERS';
};
