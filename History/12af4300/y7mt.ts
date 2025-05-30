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

type StartTimersAction = {
  type: 'START_TIMERS';
};
type StopTimersAction = {
  type: 'STOP_TIMERS';
};

export type Action = {
  type: 'ADD_TIMER' | 'START_TIMERS' | 'STOP_TIMERS';
  payload?: Timer;
};
