import { useLoaderData } from 'react-router-dom';
import { getMenu } from '../../services/apiRestaurant';
import MenuItem from './MenuItem';

function Menu() {
  const menu = useLoaderData();

  const allIngredients = [];
  menu.forEach(pizza =>
    pizza.ingredients.forEach(ingredient => allIngredients.push(ingredient)),
  );
  const allIngredientsSet = new Set(allIngredients);
  console.log(allIngredientsSet);
  return (
    <ul className="divide-y divide-stone-200 px-2">
      {menu.map(pizza => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
