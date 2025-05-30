import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import userReducer from '../src/features/users/userSlice';

const store: EnhancedStore = configureStore({
  reducer: {
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
