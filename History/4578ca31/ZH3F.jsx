import { useDispatch, useSelector } from 'react-redux';
import Button from '../../ui/Button';
import { deleteIngredient, getCart } from './cartSlice';

function DeleteIngredientButton({ pizzaId, ingredient }) {
  const cart = useSelector(getCart);
  const dispatch = useDispatch();
  console.log(pizzaId, ingredient);
  return (
    <Button
      type="small"
      onClick={() => {
        console.log('hey');
        dispatch(deleteIngredient(pizzaId, ingredient));
      }}
    >
      delete
    </Button>
  );
}

export default DeleteIngredientButton;
