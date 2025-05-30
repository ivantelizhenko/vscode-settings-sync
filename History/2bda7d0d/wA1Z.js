import { configureStore } from '@reduxjs/toolkit';

import 

const store = configureStore({
  reducer: {
    rtk: reduxToolkitReducer,
  },
});

export default store;
