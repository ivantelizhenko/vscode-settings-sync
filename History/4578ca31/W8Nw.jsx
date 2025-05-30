import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { deleteItemIngredient } from './cartSlice';

function DeleteItem({ ingredientName }) {
  const dispatch = useDispatch();
  console.log(ingredientName);
  return (
    <Button
      type="small"
      // onClick={() => dispatch(deleteItemIngredient(ingredientName))}
    >
      Delete
    </Button>
  );
}

export default DeleteItem;
