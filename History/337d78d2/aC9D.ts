import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import userReducer from '../src/features/users/userSlice';

const store: EnhancedStore = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
