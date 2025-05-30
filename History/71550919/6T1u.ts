import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface User {
  email: string;
  phone: string;
  name: string;
  username: string;
}

interface UsersState {
  users: User[];
  isLoading: boolean;
  error: string | null;
}

const initialState: UsersState = {
  users: [],
  isLoading: false,
  error: null,
};

export const fetchUsers = createAsyncThunk<User[]>(
  'user/fetchUsers',
  async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json() as Promise<User[]>;
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addCondition(state, action) {
      state;
    },
  },
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
