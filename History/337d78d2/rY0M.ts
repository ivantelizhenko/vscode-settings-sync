import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import userReducer from '../src/features/users/userSlice';

export type AppDispatch = typeof store.dispatch;

const store: EnhancedStore = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
