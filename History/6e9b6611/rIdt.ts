"use client";

import { readFileAsDataURL } from "@/src/utils/services";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TaskType = "quiz" | "typeAnswer" | "findObject";
export type AnswerOptions = "singleSelect" | "multiSelect";

export type CreateTask = {
  isLoading: boolean;
  error: string;
  title: string;
  time: number;
  image: string;
  type: TaskType;
  answers: { [key: string]: string };
  correctAnswers: { [key: string]: boolean };
};

const initialState: CreateTask = {
  isLoading: false,
  error: "",
  title: "",
  type: "quiz",
  time: 0,
  image: "",
  answers: {},
  correctAnswers: {},
};

const someSlice = createSlice({
  name: "name",
  initialState,
  reducers: {},
});

export const {} = someSlice.actions;

export default someSlice.reducer;
