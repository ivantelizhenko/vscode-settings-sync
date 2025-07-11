import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

import { API_URL } from '../utils/constants';
import { AreaType, Issue, StateType } from '../utils/types';

export const API_URL = 'https://api.github.com/repos';

const initialState: StateType = {
  listToDo: [],
  listInProgress: [],
  listDone: [],
  allRepos: [],
  repoData: { owner: '', repoName: '', repoUrl: '' },
  isLoading: false,
  selectedIssue: { id: '', status: AreaType.ToDo },
};

const statuses: { [x: string]: string } = {
  open: 'ToDo',
  workingOn: 'InProgress',
  close: 'Done',
};

export const getIssues = createAsyncThunk(
  'getIssues/board',
  async function ({ owner, repoName }: { owner: string; repoName: string }) {
    const res = await fetch(`${API_URL}/${owner}/${repoName}/issues`);
    if (!res.ok) {
      toast.error(`This repo doesn't exist. Please try again`);
      throw new Error(`Error with fetching issues`);
    }

    const data = await res.json();

    if (!Array.isArray(data)) {
      toast.error("Obtained data isn't an array");
      throw new Error("Obtained data isn't an array");
    }

    if (data.length === 0) {
      toast.error('This repo doesn`t have a issues');
      return { issues: [], repoUrl: '', owner: '', repoName: '' };
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const issues = data.map((issue: any) => {
      return {
        comments: issue.comments,
        title: issue.title,
        lastUpdate: issue.updated_at,
        number: issue.number,
        author: issue.user.login,
        id: issue.id,
        authorUrl: issue.user.html_url,
        status: AreaType[statuses[issue.state] as keyof typeof AreaType],
      };
    });
    const repoUrl = `https://github.com/${owner}/${repoName}`;
    return { issues, repoUrl, owner, repoName };
  }
);

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    setSelectedIssue(
      state,
      action: PayloadAction<{ id: string; status: AreaType }>
    ) {
      state.selectedIssue = action.payload;
    },
    changeColumn(state, action: PayloadAction<AreaType>) {
      const { id, status } = state.selectedIssue;
      const curIssue = state[`list${status}`].find(issue => issue.id === id);
      state[`list${action.payload}`].push({
        ...curIssue!,
        status: action.payload,
      });
      state[`list${status}`] = state[`list${status}`].filter(
        issue => issue.id !== id
      );
    },
  },
  extraReducers: builder =>
    builder
      .addCase(getIssues.pending, state => {
        state.isLoading = true;
      })
      .addCase(
        getIssues.fulfilled,
        (
          state,
          action: PayloadAction<{
            issues: Issue[];
            repoUrl: string;
            repoName: string;
            owner: string;
          }>
        ) => {
          state.isLoading = false;
          if (state.allRepos.includes(action.payload.repoUrl)) {
            toast.error('You alreay have this repo');
            return;
          }

          const toDoArr = action.payload.issues.filter(
            issue => AreaType[issue.status] === AreaType.ToDo
          );

          const inProgressArr = action.payload.issues.filter(
            issue => AreaType[issue.status] === AreaType.InProgress
          );
          const doneArr = action.payload.issues.filter(
            issue => AreaType[issue.status] === AreaType.Done
          );

          state.listToDo = [...state.listToDo, ...toDoArr];
          state.listInProgress = [...state.listInProgress, ...inProgressArr];
          state.listDone = [...state.listDone, ...doneArr];

          state.allRepos.push(action.payload.repoUrl);
          state.repoData = {
            owner: action.payload.owner,
            repoName: action.payload.repoName,
            repoUrl: action.payload.repoUrl,
          };

          toast.success('This repo is successfully added');
        }
      )
      .addCase(getIssues.rejected, state => {
        state.isLoading = false;
      }),
});

export const { setSelectedIssue, changeColumn } = boardSlice.actions;

export default boardSlice.reducer;
