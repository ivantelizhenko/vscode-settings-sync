const initialState = {
  year: new Date().getFullYear,
};

console.log(initialState.year);

function reduxReducer(state = initialState, action) {}
