import { configureStore } from '@reduxjs/toolkit';

import rtkReducer from './features/rtk/rtkSlice';

const store = configureStore({
  reducer: {
    rtk: rtkReducer,
  },
});

export default store;
