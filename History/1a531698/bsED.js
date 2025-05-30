import { combineReducers, legacy_createStore as createStore } from 'redux';

const rootReducer = combineReducers({
  // Here all reducers(meaningfullName: function)
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer);
