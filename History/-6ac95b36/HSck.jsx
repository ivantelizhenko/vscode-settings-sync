import styled from "styled-components";
import ProductsList from "./components/ProductsList";
import GlobalStyles from "./styles/GlobalStyles";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "./productsSlice";

import Spinner from "./components/Spinner";
import Button from "./components/Button";

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
    dispatch(fetchProducts());
  }, []);

  return (
    <>
      <StyledApp>
        <GlobalStyles />

        <ProductsList />
        <Button bgColor="rgba(19, 221, 12, 0.579)">Add</Button>
      </StyledApp>
    </>
  );
}

export default App;
