import { configureStore } from '@reduxjs/toolkit';

import rtkReducer from './rtkSlice.js';

const store = configureStore({
  reducer: {
    rtk: reduxToolkitReducer,
  },
});

export default store;
