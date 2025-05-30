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
      };
    case 'redux/setYear':
      return {
        ...state,
        year: action.payload,
        age: state.birthYear - action.payload,
      };
    default:
      return state;
  }
}
