import { configureStore } from '@reduxjs/toolkit';
import chessReducer from './chessSlice';
import { useDispatch, useSelector } from 'react-redux';

const store = configureStore({
  reducer: {
    chess: chessReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export default store;
