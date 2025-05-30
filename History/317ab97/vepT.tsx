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

function reducer(state:unknown, action) {
  switch (action.type) {
    case 'loading':
      return { ...state, isLoading: ' true' };
    case 'cities/loaded':
      return { ...state, isLoading: false, cities: action.payload };
    case 'city/loaded':
      return { ...state, isLoading: false, currentCity: action.payload };
    case 'city/created':
      return {
        ...state,
        isLoading: false,
        cities: [...state.cities, action.payload],
        currentCity: action.payload,
      };

    case 'city/deleted':
      return {
        ...state,
        isLoading: false,
        cities: [...state.cities.filter(city => city.id !== action.payload)],
        currentCity: {},
      };
    case 'rejected':
      return { ...state, isLoading: false, error: action.payload };
    default:
      throw new Error('Unknown action type');
  }


 function TimersProvider({ children }: TimerContextProviderProps) {
const [timersState, dispatch] = useReducer(reducer, initialState)

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
