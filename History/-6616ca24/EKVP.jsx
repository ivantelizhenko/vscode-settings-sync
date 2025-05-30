import { useSelector } from 'react-redux';
import { getCart } from './cartSlice';
import { useParams } from 'react-router-dom';
import IngredientItem from './IngredientItem';

const fakeCart = [
  {
    pizzaId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: 'Vegetale',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function ChangeIngrediients() {
  // const cart = useSelector(getCart);
  const cart = fakeCart;
  const { pizzaItemId: paramsId } = useParams();
  const currentPizza = cart.find(item => item.pizzaId === +paramsId);

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-slate-200/20 backdrop-blur-sm">
      <ul className="bg-stone-300 px-4 py-2">
        {currentPizza.ingredients.map(item => (
          <IngredientItem key={item}>{item}</IngredientItem>
          // <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ChangeIngrediients;
