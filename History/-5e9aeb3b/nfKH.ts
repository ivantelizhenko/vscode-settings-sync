'use client';

import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CreateTask } from './createTaskSlice';
import { readFileAsDataURL } from '@/src/utils/services';

export type PagesSettings = 'mainSettings' | 'questions';
export type QuestImageType = 'previewImage' | 'backgroundImage';

export type Quest = {
  title: string;
  description: string;
  victoryMessage: string;
  defeatMessage: string;

  author: string;
  tasks: CreateTask[];
};

export type createQuestState = {
  settingPage: PagesSettings;

  isLoading: boolean;
  error: string;

  id: string;

  backgroundImage?: string;
  previewImage: string;

  title: string;
  description: string;
  victoryMessage: string;
  defeatMessage: string;

  author: string;
  tasks: CreateTask[];
};

const initialState: createQuestState = {
  settingPage: 'mainSettings',
  isLoading: false,
  error: '',
  id: '',
  previewImage: '',
  backgroundImage: '',

  author: '',

  title: '',
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
    if (!file) return { image: '', type };
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
    clear(state) {
      state.title = '';
      state.description = '';
      state.victoryMessage = '';
      state.defeatMessage = '';
      state.author = '';
      state.tasks = [];
    },
  },
  extraReducers: builder =>
    builder
      .addCase(setImage.pending, state => {
        state.isLoading = true;
      })
      .addCase(
        setImage.fulfilled,
        (
          state,
          action: PayloadAction<{ type: QuestImageType; image: string }>,
        ) => {
          state.isLoading = false;
          state[action.payload.type] = action.payload.image;
        },
      )
      .addCase(setImage.rejected, state => {
        state.error = 'The problem with uploading image. Try again!';
        state.isLoading = false;
      }),
});

export const { setSettingPage } = createQuestSlice.actions;

export default createQuestSlice.reducer;
