const initialStateCustomer = {
  fullname: '',
  nationalID: '',
  createdAt: '',
  // balance: 0,
  // loan: 0,
  // loanPurpose: '',
};

function customerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case 'customer/createCustomer':
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createAt,
      };
    case 'customer/updateName':
      return { ...state, fullName: action.payload };
    default:
      return state;
  }
}
