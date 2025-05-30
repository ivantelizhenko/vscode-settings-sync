import { composeWithDevTools } from '@redux-devtools/extension/';
import {
  combineReducers,
  legacy_createStore as createStore,
} from '@reduxjs/toolkit';

const initialState = {
  currentYear: new Date().getFullYear(),
  birthYear: 0,
  age: 0,
};

function reduxReducer(state = initialState, action) {
  switch (action.type) {
    case 'redux/setBirthYear':
      return {
        ...state,
        birthYear: action.payload,
        age: state.currentYear - action.payload,
      };
    case 'redux/setCurrentYear':
      return {
        ...state,
        currentYear: action.payload,
        age: action.payload - state.birthYear,
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  redux: reduxReducer,
});

const store = createStore(reduxReducer, composeWithDevTools());

// Action creator

function setBirthYear(birthYear) {
  store.dispatch({ type: 'redux/setBirthYear', payload: birthYear });
}
function setYear(setYear) {
  return { type: 'redux/setCurrentYear', payload: setYear };
}

store.dispatch(setBirthYear(2004));
store.dispatch(setYear(2037));
