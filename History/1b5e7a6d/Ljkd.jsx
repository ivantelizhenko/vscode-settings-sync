import { useSelector } from 'react-redux';
import Button from '../../ui/Button';
import IngredientItem from './IngredientItem';
import { getCart } from './cartSlice';
import { useNavigate, useParams } from 'react-router-dom';
import EmptyCart from './EmptyCart';

function IngredientsList() {
  const arr = Array.from({ length: 5 }, (_, i) => i + 1);
  const cart = useSelector(getCart);
  const navigate = useNavigate();

  if (!cart.length) return <EmptyCart />;
  const { pizzaId: currentPizzaId } = useParams();

  const { ingredients: currentPizzaIngredients } = cart.find(
    item => item.pizzaId === +currentPizzaId,
  );

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-slate-200/20 backdrop-blur-sm">
      <div className="flex flex-col gap-2 bg-stone-200 px-6 py-3">
        <ul className="mx-auto">
          {currentPizzaIngredients.map(item => (
            <IngredientItem key={item} ingredient={item} />
          ))}
        </ul>
        <Button to="/cart" type="secondarySmall">
          Back
        </Button>
      </div>
    </div>
  );
}

export default IngredientsList;
