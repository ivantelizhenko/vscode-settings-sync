import { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import GlobalStyles from "./styles/GlobalStyles";
import { fetchProducts } from "./productsSlice";

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
    dispatch(fetchProducts());
    dispatch(
      postProducts({
        id: 1,
        imageUrl: "some url here",
        name: "Product name",
        count: 4,
        size: {
          width: 200,
          height: 200,
        },
        weight: "200g",
        comments: ["CommentModel", "CommentModel"],
      })
    );
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
