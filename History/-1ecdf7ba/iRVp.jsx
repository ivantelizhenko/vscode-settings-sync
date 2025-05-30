import { useSelector } from 'react-redux';
import { formatCurrency } from '../../utils/helpers';
import { getCart } from '../cart/cartSlice';

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const cart = useSelector(getCart);
  console.log(cart);
  const ingredientsCurrent = cart.find(item => item.name === name);
  console.log(ingredientsCurrent);
  const { quantity, name, totalPrice } = item;

  return (
    <li className="space-y-1 py-3">
      <div className="flex items-center justify-between gap-4 text-sm">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
      <p className="text-sm capitalize italic text-stone-500">
        {isLoadingIngredients ? 'Loading...' : ingredients.join(', ')}
      </p>
    </li>
  );
}

export default OrderItem;
