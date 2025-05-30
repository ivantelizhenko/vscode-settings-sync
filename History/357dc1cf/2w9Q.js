import { useDispatch, useSelector } from 'react-redux';

function ComponentName() {
  const variableName = useDispatch(store => store);
}

function Customer() {
  const customer = useSelector(store => store.customer);

  console.log(customer);

  return <h2>👋 Welcome, {customer.fullName}</h2>;
}

export default Customer;
