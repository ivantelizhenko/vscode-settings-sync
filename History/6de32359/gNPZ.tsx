import Header from "./components/Header.tsx";
import Shop from "./components/Shop.tsx";
import Product from "./components/Product.tsx";
import { DUMMY_PRODUCTS } from "./dummy-products.ts";
import { useAppDispatch, useAppSelector } from "./hooks/storeHooks.ts";
import { removeFromCart, selectItems } from "./store/cartSlice.ts";

function App() {
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectItems);
  const all = useAppSelector((store) => store);

  dispatch(() => removeFromCart("asds"));
  console.log(items);
  console.log(all);
  return (
    <>
      <Header />
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
    </>
  );
}

export default App;
