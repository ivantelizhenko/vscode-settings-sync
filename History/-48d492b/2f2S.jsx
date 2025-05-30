import { getMenu } from "../../services/apiRestaurant";

function Menu() {
  return <h1>Menu</h1>;
}

async function loader() {
  try {
    const rmenu = await getMenu();
  } catch {
    throw new Error("fatching failed");
  } finally {
    // setIsLoading(false);
  }
}

export default Menu;
