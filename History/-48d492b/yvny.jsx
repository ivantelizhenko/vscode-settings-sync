import { getMenu } from "../../services/apiRestaurant";

function Menu() {
  return <h1>Menu</h1>;
}

async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
