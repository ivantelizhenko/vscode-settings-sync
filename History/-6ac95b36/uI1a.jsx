import styled from "styled-components";
import ProductsList from "./components/ProductsList";
import GlobalStyles from "./styles/GlobalStyles";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "./productsSlice";

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
      </StyledApp>
    </>
  );
}

export default App;
