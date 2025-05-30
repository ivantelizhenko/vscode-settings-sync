import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';
import DeleteItem from './DeleteItem';
import UpdateItemQuantity from './UpdateItemQuantity';

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  function handleChangeIng() {}

  return (
    <li className="space-y-2 py-3 sm:flex sm:items-center sm:justify-between">
      <div className="flex gap-3">
        <p className="mb-1 sm:mb-0">
          {quantity}&times; {name}
        </p>
        <Button type="secondarySmall" to={`:${pizzaId}`}>
          change ingredients
        </Button>
      </div>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateItemQuantity pizzaId={pizzaId}>{quantity}</UpdateItemQuantity>
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
