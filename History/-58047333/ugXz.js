import { configureStore } from '@reduxjs/toolkit';
import userReducer from '';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
