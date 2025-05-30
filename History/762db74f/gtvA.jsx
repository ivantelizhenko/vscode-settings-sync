import styled from "styled-components";
import Button from "../../ui/Button";

const CarouselContainer = styled.div`
  background-color: green;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const PhotosContainer = styled.div`
  background-color: blue;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 2.4rem 4.8rem;
`;

const ButtonsContainer = styled.div`
  background-color: #1c3e08;
  height: 20%;
  display: flex;
  gap: 1.2rem;
  /* padding: ; */
`;

function Carousel() {
  return (
    <CarouselContainer>
      <PhotosContainer>photos container</PhotosContainer>
      <ButtonsContainer>
        <Button>{`<`}</Button>
        <Button>{`>`}</Button>
      </ButtonsContainer>
    </CarouselContainer>
  );
}

export default Carousel;
