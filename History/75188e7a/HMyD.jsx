import { Link } from 'react-router-dom';
import Button from '../../ui/Button';

function EmptyCart() {
  return (
    <div>
      <Button to="/menu">&larr; Back to menu</But>

      <p>Your cart is still empty. Start adding some pizzas :)</p>
    </div>
  );
}

export default EmptyCart;
