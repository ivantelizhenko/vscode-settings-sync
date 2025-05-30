import { createContext, useContext, useReducer } from 'react';
import {
  TimerContextProviderProps,
  TimerContextValue,
  TimersState,
} from './timersContextTypes';
import { Action } from '@reduxjs/toolkit';

const TimersContext = createContext<TimerContextValue | null>(null);

const initialState: TimersState = {
  isRunning: true,
  timers: [],
};

function timersReducer(state:TimersState, action:Action):TimersState {
  switch (action.type) {
    case 'ADD_TIMER':{}
    case 'START_TIMERS':{}
    case 'STOP_TIMERS':{}
    default:
      throw new Error('Unknown action type');
  }


 function TimersProvider({ children }: TimerContextProviderProps) {
const [timersState, dispatch] = useReducer(timersReducer, initialState)

  const ctx: TimerContextValue = {
    timers: [],
    isRunning: false,
    addTimer(timerData) {},
    startTimers() {},
    stopTimers() {},
  };

  return (
    <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
  );
});

function useTimers() {
  const context = useContext(TimersContext);

  if (context === undefined)
    throw new Error(
      'TimerContext was used outside of the TimerContextProvider'
    );

  return context as TimerContextValue;
}

export { TimersProvider, useTimers };
