import styled from "styled-components";
import Heading from "./Heading";
import UnstyledButton from "./UnstyledButton";
import Icon from "./Icon";

function CardDetails() {
  return (
    <Wrapper>
      <Heading as="h2">Оголошення</Heading>
      <ImageWrapper>
        <img src="/public/animals/cat.png" alt="Cats' photo" />
        <BookmarkButton>
          <Icon id="bookmark" size={24} strokeWidth={2} />
        </BookmarkButton>
      </ImageWrapper>
      <Name as="h2">
        <Icon id="venus" size={24} strokeWidth={2} /> Ліна
      </Name>

      <Details>
        <Line>
          <Icon id="calendar" size={24} strokeWidth={2} />
          <p>2 роки</p>
        </Line>
        <Line>
          <Icon id="map-pin" size={24} strokeWidth={2} />
          <p>Горлівка</p>
        </Line>
        <Line>
          <Icon id="home" size={24} strokeWidth={2} />
          <a>Дай лапу друже!</a>
        </Line>
      </Details>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  gap: 24px;
`;
const ImageWrapper = styled.div`
  border-radius: 24px;
  position: relative;

  & img {
    width: 100%;
    object-fit: cover;
  }
`;

const Name = styled(Heading)`
  display: flex;
  gap: 8px;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Line = styled.div`
  display: flex;
  gap: 8px;

  a {
    cursor: pointer;
    display: inline-block;
    border-bottom: 1px solid #000;
    padding-bottom: 1px;
  }
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
