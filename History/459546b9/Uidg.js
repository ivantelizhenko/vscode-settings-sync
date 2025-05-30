const initialState = {
  year: new Date().getFullYear(),
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
    case 'redux/age':
      return {
        ...state,
        age,
      };
  }
}
