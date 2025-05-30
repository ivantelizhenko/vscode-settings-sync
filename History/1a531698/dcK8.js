import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from 'redux';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension/lib/types/logOnly.js';

import accountReducer from './features/accounts/accountSlice.js';
import customerReducer from './features/customers/customerSlice.js';

const rootReducer = combineReducers({
  // Here all reducers(meaningfullName: function)
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
