import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { formatCurrency } from '../../utils/helpers';

function CartOverview() {
  const totalCartQuantity = useSelector(store =>
    store.cart.cart.reduce((acc, item) => acc + item.quantity, 0),
  );

  const totalCartPrice = useSelector(store =>
    store.cart.cart.reduce((acc, item) => acc + item.totalPrice, 0),
  );

  if (!totalCartQuantity) return null;

  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>
          {totalCartQuantity} {`pizza${totalCartQuantity > 1 ? 's' : ''}`}
        </span>
        =<span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
