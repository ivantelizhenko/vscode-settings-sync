import { configureStore } from '@reduxjs/toolkit';

import accountReducer from './features/accounts/accountSlice.js';
import customerReducer from './features/customers/customerSlice.js';

const rootReducer = combineReducers({
  // Here all reducers(meaningfullName: function)
  account: accountReducer,
  customer: customerReducer,
});

const store = configureStore(rootReducer);

export default store;
