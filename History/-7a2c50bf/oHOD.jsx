import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';

function AddItem({ pizzaId }) {
  const dispatch = useDispatch();

  return (
    <Button type="small" onClick={() => {}}>
      Add Ingredient
    </Button>
  );
}

export default AddItem;
