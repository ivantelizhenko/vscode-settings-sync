import { useLoaderData } from 'react-router-dom';
import { getMenu } from '../../services/apiRestaurant';
import MenuItem from './MenuItem';

function Menu() {
  // can use data from loader
  const menu = useLoaderData();

  return (
    <ul className="divide-y divide-stone-200">
      {menu.map(pizza => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

//create a loader function
export async function loader() {
  const menu = await getMenu();

  return menu;
}

export default Menu;
