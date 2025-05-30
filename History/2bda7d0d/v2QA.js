import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    rtk: reduxToolkitReducer,
  },
});

export default store;
