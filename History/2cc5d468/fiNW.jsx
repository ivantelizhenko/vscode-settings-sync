import Button from '../../ui/Button';
import { useCheckOut } from './useCheckout';

function CheckoutButton({ bookingId }) {
  const { checkout, isCheckingOut } = useCheckOut();

  return (
    <Button $variation="primary" $size="small">
      Check out
    </Button>
  );
}

export default CheckoutButton;
