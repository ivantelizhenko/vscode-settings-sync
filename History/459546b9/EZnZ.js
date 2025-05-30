import {
  combineReducers,
  legacy_createStore as createStore,
} from '@reduxjs/toolkit';

const initialState = {
  year: 0,
  birthYear: 0,
  age: 0,
};

function reduxReducer(state = initialState, action) {
  switch (action.type) {
    case 'redux/setBirthYear':
      return {
        ...state,
        birthYear: action.payload,
        age: state.year - action.payload,
      };
    case 'redux/setYear':
      return {
        ...state,
        year: action.payload,
        age: action.payload - state.birthYear,
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  redux: reduxReducer,
});

const store = createStore(reduxReducer);
