import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { deleteItemIngredient } from './cartSlice';

function DeleteItem({ ingredientName, id }) {
  const dispatch = useDispatch();
  return (
    <Button
      type="small"
      onClick={() => dispatch(deleteItemIngredient(id, ingredientName))}
    >
      Delete
    </Button>
  );
}

export default DeleteItem;
