'use client';

import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CreateTask } from './createTaskSlice';
import { readFileAsDataURL } from '@/src/utils/services';

export type PagesSettings = 'mainSettings' | 'questions';
export type QuestImageType = 'previewImage' | 'backgroundImage';

export type createQuestState = {
  settingPage: PagesSettings;

  isLoading: boolean;
  error: string;

  title: string;
  id: string;
  previewImage: string;
  backgroundImage?: string;
  author: string;
  description: string;
  victoryMessage: string;
  defeatMessage: string;
  tasks: CreateTask[];
};

const initialState: createQuestState = {
  settingPage: 'mainSettings',
  isLoading: false,
  error: '',
  title: '',
  id: '',
  previewImage: '',
  backgroundImage: '',
  author: '',
  description: '',
  victoryMessage: '',
  defeatMessage: '',
  tasks: [],
};

export const setImage = createAsyncThunk(
  'createTask/setImage',
  async function ({
    file,
    type,
  }: {
    file: File | undefined;
    type: QuestImageType;
  }) {
    if (!file) return '';
    const image = await readFileAsDataURL(file);
    return { image, type };
  },
);

const createQuestSlice = createSlice({
  name: 'quests',
  initialState,
  reducers: {
    setSettingPage(state, action: PayloadAction<PagesSettings>) {
      state.settingPage = action.payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(setImage.pending, state => {
        state.isLoading = true;
      })
      .addCase(
        setImage.fulfilled,
        (state, action: PayloadAction<{ type: QuestImageType }>) => {
          state.isLoading = false;
          console.log(action.payload);
        },
      )
      .addCase(setImage.rejected, state => {
        state.error = 'The problem with uploading image. Try again!';
        state.isLoading = false;
      }),
});

export const { setSettingPage } = createQuestSlice.actions;

export default createQuestSlice.reducer;
