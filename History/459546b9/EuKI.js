
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  combineReducers,
  compose,
  legacy_createStore as createStore,
} from '@reduxjs/toolkit';

const initialState = {
  currentYear: 0,
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
  composeWithDevTools()
});

const store = createStore(reduxReducer);

// Action creator

function setBirthYear(birthYear) {
  return { type: 'redux/setBirthYear', payload: birthYear };
}
function setCurrentYear() {
  return { type: 'redux/setCurrentYear', payload: new Date().getFullYear() };
}

store.dispatch(setBirthYear(2004));
