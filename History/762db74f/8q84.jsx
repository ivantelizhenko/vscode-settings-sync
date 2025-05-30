import styled from "styled-components";
import Button from "./Button";

import Photos from "./Photos";
import { usePage } from "../context/PageContext";

const CarouselContainer = styled.div`
  background-color: green;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const PhotosContainer = styled.div`
  position: relative;
  /* overflow: hidden; */
  background-color: blue;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 3.6rem 4.8rem;
  gap: 4.8rem;
`;

const ButtonsContainer = styled.div`
  background-color: #1c3e08;
  height: 20%;
  display: flex;
  gap: 1.2rem;
  padding: 1.2rem 0rem;
`;

function Carousel() {
  const { page, pageIncrease, pageDecrease } = usePage();
  console.log(page);
  return (
    <CarouselContainer>
      <PhotosContainer>
        <Photos />
      </PhotosContainer>
      <ButtonsContainer>
        <Button onClick={() => pageDecrease()}>{`<`}</Button>
        <Button onClick={() => pageIncrease()}>{`>`}</Button>
      </ButtonsContainer>
    </CarouselContainer>
  );
}

export default Carousel;
