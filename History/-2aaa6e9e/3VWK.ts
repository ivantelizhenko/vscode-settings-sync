'use client';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

export type TaskType = {
  id: string;
  taskTitle: string;
  type: 'quiz' | 'typeAnswer' | 'findObject';
  time: number;
  answerOption: 'singleSelect' | 'multiSelect';
  image?: string;
  answers: [string, string, string?, string?] | string;
};

export type QuestType = {
  id: string;
  author: string;
  title: string;
  description: string;
  victoryMessage: string;
  defeatMessage: string;
  previewImg?: string;
  backgroundImg?: string;
  tasks: TaskType[];
};

type QuestsState = {
  quests: QuestType[];
};

const initialState: QuestsState = {
  quests: [],
};

const questsSlice = createSlice({
  name: 'quests',
  initialState,
  reducers: {
    addQuest: (state, action: PayloadAction<QuestType>) => {
      state.quests.push(action.payload);
    },
    removeQuest: (state, action: PayloadAction<string>) => {
      state.quests.filter(quest => quest.id !== action.payload);
    },
  },
});

export const { addQuest, removeQuest } = questsSlice.actions;

export const selectQuests = (state: RootState) => state.quests;

export default questsSlice.reducer;
