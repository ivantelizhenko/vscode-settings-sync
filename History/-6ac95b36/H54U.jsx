import styled from "styled-components";
import ProductsList from "./components/ProductsList";
import GlobalStyles from "./styles/GlobalStyles";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addProduct, fetchProducts } from "./productsSlice";

const StyledApp = styled.section`
  background: #ffefd58e;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);

  const dispatch = useDispatch();

  useEffect(function () {
    async function getData() {
      const data = dispatch("products/get");
      console.log(data);
    }
    getData();
  }, []);

  return (
    <>
      <StyledApp>
        <GlobalStyles />
        {status === "loading" && <Spinner />}
        <ProductsList />
        {error.length > 0 && <Error message={error} />}
      </StyledApp>
    </>
  );
}

export default App;
