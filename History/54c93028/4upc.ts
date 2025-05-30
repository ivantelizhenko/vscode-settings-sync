'use client';

import { configureStore } from '@reduxjs/toolkit';
import questsReducer from './questsSlice';

const store = configureStore({
  reducer: questsReducer,
  reducer: createQuestReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
