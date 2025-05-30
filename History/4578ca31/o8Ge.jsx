import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { deleteIngredient } from './cartSlice';

function DeleteIngredientButton({ pizzaId, ingredient }) {
  const dispatch = useDispatch();

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
