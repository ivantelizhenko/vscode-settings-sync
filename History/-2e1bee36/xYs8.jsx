import { useFetcher } from 'react-router-dom';
import Button from '../../ui/Button';
import { updateOrder } from '../../services/apiRestaurant';
import { useSelector } from 'react-redux';
import { getCart } from '../cart/cartSlice';

function UpdateOrder({ order }) {
  const fetcher = useFetcher();
  const cart = order.cart;

  return (
    <fetcher.Form method="patch" className="text-right">
      <Button type="primary">Make priority</Button>
    </fetcher.Form>
  );
}

export default UpdateOrder;

export async function action({ request, params }) {
  const data = { priority: true };

  await updateOrder(params.orderId, data);

  return null;
}
