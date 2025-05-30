import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fullName: '',
  nationalID: '',
  createdAt: '',
};

// export default function customerReducer(state = initialStateCustomer, action) {
//   switch (action.type) {
//     case 'customer/createCustomer':
//       return {
//         ...state,
//         fullName: action.payload.fullName,
//         nationalID: action.payload.nationalID,
//         createdAt: action.payload.createAt,
//       };
//     case 'customer/updateName':
//       return { ...state, fullName: action.payload };
//     default:
//       return state;
//   }
// }

// export function createCustomer(fullName, nationalID) {
//   return {
//     type: 'customer/createCustomer',
//     payload: { fullName, nationalID, createAt: new Date().toISOString() },
//   };
// }
// export function updateName(fullName) {
//   return { type: 'customer/updateName', payload: fullName };
// }

// const accountSlice = createSlice({
//   name: 'account',
//   initialState,
//   reducers: {
//     deposit(state, action) {
//       state.balance += action.payload;
//     },
//     withdraw(state, action) {
//       state.balance -= action.payload;
//     },
//     requestLoan(state, action) {
//       if (state.loan > 0) return;

//       state.loan = action.payload.amount;
//       state.balance += action.payload.amount;
//       state.loanPurpose = action.payload.purpose;
//     },
//     payLoan(state, action) {
//       state.loan = 0;
//       state.loanPurpose = '';
//       state.balance -= state.loan;
//     },
//   },
// });

// export const { deposit, withdraw, requestLoan, payLoan } = accountSlice.actions;
