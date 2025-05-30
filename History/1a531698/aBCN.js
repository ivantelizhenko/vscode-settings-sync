import { combineReducers, legacy_createStore as createStore } from 'redux';

import accountReducer from './features/accounts/accountSlice.js';
import customerReducer from './features/accounts/customerSlice.js';

const rootReducer = combineReducers({
  // Here all reducers(meaningfullName: function)
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer);

export default store;
