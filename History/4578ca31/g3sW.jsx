import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';

function DeleteIngredientButton() {
  const dispatch = useDispatch();

  return (
    <Button type="small" onClick={() => dispatch(deleteIngre)}>
      delete
    </Button>
  );
}

export default DeleteIngredientButton;
