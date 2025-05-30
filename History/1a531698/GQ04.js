import { combineReducers, legacy_createStore as createStore } from 'redux';

import accountReducer from './features/accounts/accountSlice.js';

const rootReducer = combineReducers({
  // Here all reducers(meaningfullName: function)
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer);

export default store;
