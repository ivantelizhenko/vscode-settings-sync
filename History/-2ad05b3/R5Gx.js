const initialStateCustomer = {
  fullname: '',
  nationalID: '',
  createdAt: '',
  // balance: 0,
  // loan: 0,
  // loanPurpose: '',
};

export default function customerReducer(state = initialStateCustomer, action) {
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

export function createCustomer(fullName, nationalID) {
  return {
    type: 'customer/createCustomer',
    payload: { fullName, nationalID, createAt: new Date().toISOString() },
  };
}
export function updateName(fullName) {
  return { type: 'customer/updateName', payload: fullName };
}
