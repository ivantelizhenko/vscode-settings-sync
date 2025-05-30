const initialState = {
  year: 0,
  birthYear: 0,
  age: this.year - this.birthYear,
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
      };
  }
}
