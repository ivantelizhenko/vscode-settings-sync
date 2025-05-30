import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';

function AddIngredient() {
  const dispatch = useDispatch();

  return (
    <div>
      <input
        placeholder="ingredient"
        className="rounded-full border border-stone-200 px-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-400"
      />
      <Button
        type="secondarySmallYellow"
        onClick={() => dispatch(AddIngredient(pizzaId, ingredient))}
      >
        {' '}
        Add ingredient
      </Button>
    </div>
  );
}

export default AddIngredient;
