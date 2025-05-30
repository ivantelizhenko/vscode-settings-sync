import { useSelector } from 'react-redux';
import { getCart } from './cartSlice';
import { useParams } from 'react-router-dom';
import IngredientItem from './IngredientItem';
import Button from '../../ui/Button';

const fakeCart = [
  {
    pizzaId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
    ingredients: [2, 3, 4, 5, 6, 7],
  },
  {
    pizzaId: 6,
    name: 'Vegetale',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
    ingredients: [7, 6, 5, 4, 3, 2],
  },
  {
    pizzaId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
    ingredients: [2, 4, 6, 3, 5, 7],
  },
];

function ChangeIngrediients() {
  const cart = useSelector(getCart);
  // const cart = fakeCart;
  const { pizzaItemId: paramsId } = useParams();

  // Ingredients from current pizza
  const { ingredients } = cart.find(item => item.pizzaId === +paramsId);

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-slate-200/20 backdrop-blur-sm">
      <div className="space-y-3 bg-stone-300 px-4 py-2">
        <ul className="flex flex-col gap-2">
          {ingredients.map(item => (
            <IngredientItem key={item}>{item}</IngredientItem>
          ))}
        </ul>
        <Button type="small" to="/cart">
          Close
        </Button>
      </div>
    </div>
  );
}

export default ChangeIngrediients;
