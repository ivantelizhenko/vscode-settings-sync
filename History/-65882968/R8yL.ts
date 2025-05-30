'use client';

import { readFileAsDataURL } from '@/src/utils/services';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TaskType = 'quiz' | 'typeAnswer' | 'findObject';
export type AnswerOptions = 'singleSelect' | 'multiSelect';

export type CreateTask = {
  isLoading: boolean;
  error: string;
  title: string;
  time: number;
  id: string;
  image: string;
  type: TaskType;
  answerOption: AnswerOptions;
  answers: { [key: string]: string };
  correctAnswers: { [key: string]: boolean };
};

const initialState: CreateTask = {
  isLoading: false,
  error: '',
  id: '',
  title: '',
  type: 'quiz',
  time: 0,
  image: '',
  answerOption: 'singleSelect',
  answers: {},
  correctAnswers: {},
};

export const setImage = createAsyncThunk(
  'createTask/setImage',
  async function (file: File | undefined) {
    if (!file) return '';
    const image = await readFileAsDataURL(file);
    return image;
  },
);

const createTaskSlice = createSlice({
  name: 'createTask',
  initialState,
  reducers: {
    setTaskType(state, action: PayloadAction<TaskType>) {
      state.type = action.payload;
      state.correctAnswers = {};
      state.answers = {};
    },
    toggleAnswers(state, action: PayloadAction<string>) {
      state.correctAnswers[action.payload] =
        !state.correctAnswers[action.payload];
    },
  },
  extraReducers: builder =>
    builder
      .addCase(setImage.pending, state => {
        state.isLoading = true;
      })
      .addCase(setImage.fulfilled, (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.image = action.payload;
      })
      .addCase(setImage.rejected, state => {
        state.error = 'The problem with uploading image. Try again!';
        state.isLoading = false;
      }),
});

export const { setTaskType, toggleAnswers } = createTaskSlice.actions;

export default createTaskSlice.reducer;
