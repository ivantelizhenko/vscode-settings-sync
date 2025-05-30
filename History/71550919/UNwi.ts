import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState: {
  users: Array<any>;
  isLoading: boolean;
  error: string | null;
} = {
  users: [],
  isLoading: false,
  error: null,
};

interface User {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export const fetchUsers = createAsyncThunk<User[]>(
  'user/fetchUsers',
  async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(fetchUsers.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchUsers.rejected, state => {
        state.isLoading = false;
        state.error = 'There was a problem getting users. ';
      }),
});

export default userSlice.reducer;
