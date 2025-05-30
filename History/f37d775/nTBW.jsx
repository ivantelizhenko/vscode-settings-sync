import LinkButton from '../../ui/LinkButton';
import Button from '../../ui/Button';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, getCart } from './cartSlice';
import { getUsername } from '../user/userSlice';
import EmptyCart from './EmptyCart';
import ChangeIngrediients from './ChangeIngrediients';

const fakeCart = [
  {
    pizzaId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
    indredients: [2, 3, 4, 5, 6, 7],
  },
  {
    pizzaId: 6,
    name: 'Vegetale',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
    indredients: [7, 6, 5, 4, 3, 2],
  },
  {
    pizzaId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
    indredients: [2, 4, 6, 3, 5, 7],
  },
];

function Cart() {
  const username = useSelector(getUsername);
  // const cart = useSelector(getCart);
  const cart = fakeCart;
  const dispatch = useDispatch();

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="relative px-4 py-3">
      <LinkButton to="/menu/">&larr; Back to menu</LinkButton>
      {/* <ChangeIngrediients /> */}

      <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>

      <ul className="mt-3 divide-y divide-stone-200 border-b" key={username}>
        {cart.map(item => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Button to="/order/new" type="primary">
          Order pizzas
        </Button>

        <Button type="secondary" onClick={() => dispatch(clearCart())}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
