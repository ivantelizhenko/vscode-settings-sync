import { useSelector } from 'react-redux';
import { getCart } from './cartSlice';
import { useParams } from 'react-router-dom';

function ChangeIngrediients() {
  const cart = useSelector(getCart);
  const pizzaIdParams = useParams();
  const currentPizza = cart.find(
    item => item.pizzaId === pizzaIdParams.idPizzaItem,
  );
  console.log(cart);
  console.log(pizzaIdParams);
  console.log(currentPizza);

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-slate-200/20 backdrop-blur-sm">
      <ul className="bg-stone-300 px-4 py-2">ingredients</ul>
    </div>
  );
}

export default ChangeIngrediients;
