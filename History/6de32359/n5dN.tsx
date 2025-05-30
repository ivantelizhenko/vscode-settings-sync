import Header from "./components/Header.tsx";
import Shop from "./components/Shop.tsx";
import Product from "./components/Product.tsx";
import { DUMMY_PRODUCTS } from "./dummy-products.ts";
import { useAppDispatch, useAppSelector } from "./hooks/storeHooks.ts";

function App() {
  const dispatch = useAppDispatch();
  const items = useAppSelector();

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
