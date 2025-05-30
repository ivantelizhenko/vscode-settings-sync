import { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import GlobalStyles from "./styles/GlobalStyles";
import { getProducts, postProducts } from "./productsSlice";

import ProductsList from "./components/Product/ProductsList";

const StyledApp = styled.section`
  background: #ffefd58e;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  const dispatch = useDispatch();

  useEffect(function () {
    dispatch(getProducts());
    // dispatch(postProducts());
  }, []);

  return (
    <>
      <StyledApp>
        <GlobalStyles />
        <ProductsList />
      </StyledApp>
    </>
  );
}

export default App;
