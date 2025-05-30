import { createContext, useContext, useReducer } from 'react';
import {
  TimerContextProviderProps,
  TimerContextValue,
  TimerState,
} from './timersContextTypes';

const TimersContext = createContext<TimerContextValue | null>(null);

const initialState: TimerState = {
  isRunning: true,
  timers: [],
};

function timersReducer(state, action) {
  switch (action.type) {
    case 'hey':{}
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
