import { configureStore } from '@reduxjs/toolkit';

import reducer asimport rtkSlice from './features/rtk/rtkSlice';
 reduxToolkitReducer from ''rtkSlice

const store = configureStore({
  reducer: {
    rtk: reduxToolkitReducer,
  },
});

export default store;
