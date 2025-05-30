import styled from "styled-components";
import Heading from "./Heading";
import UnstyledButton from "./UnstyledButton";

function CardDetails() {
  return (
    <Wrapper>
      <Heading>Оголошення</Heading>
      <ImageWrapper>
        <img src="/public/animals/cat.png" alt="Cats' photo" />
        <BookmarkButton>
          <Icon id="bookmark" size={24} strokeWidth={2} />
        </BookmarkButton>
      </ImageWrapper>
      <Details>
        <Line>
          <Icon id="venus" size={24} strokeWidth={2} />
          <Heading> Ліна</Heading>
        </Line>
        <Line>
          <Icon id="calendar" size={24} strokeWidth={2} />
          <p>{age}</p>
        </Line>
        <Line>
          <Icon id="map-pin" size={24} strokeWidth={2} />
          <p>{place}</p>
        </Line>
      </Details>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
const ImageWrapper = styled.div`
  border-radius: 24px;
  position: relative;

  & img {
    width: 100%;
    object-fit: cover;
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Line = styled.div`
  display: flex;
  gap: 8px;
`;

const BookmarkButton = styled(UnstyledButton)`
  position: absolute;
  top: 8px;
  right: 8px;
  padding: 16px;
  background-color: #fff;
  border-radius: 50%;
`;

export default CardDetails;
