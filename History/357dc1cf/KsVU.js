import { useSelector } from 'react-redux';
import customerReducer from './customerSlice';

function Customer() {
  const name = useSelector(customerReducer);
  console.log(name);

  return <h2>👋 Welcome, %NAME%</h2>;
}

export default Customer;
