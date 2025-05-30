'use client';

import { configureStore } from '@reduxjs/toolkit';
import questsReducer from './createQuestSlice';
import createQuestsReducer from './createTaskSlice';

const store = configureStore({
  reducer: {
    createQuest: createQuestsReducer,
    quests: questsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
