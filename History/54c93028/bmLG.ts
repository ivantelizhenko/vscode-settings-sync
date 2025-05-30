'use client';

import { configureStore } from '@reduxjs/toolkit';
import questsReducer from './questsSlice';
import createQuestsReducer from './createQuestsSlice';

const store = configureStore({
  reducer: {
    createQuest: questsReducer,
    createQuestsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
