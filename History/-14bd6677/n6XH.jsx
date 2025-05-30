import styled from "styled-components";
import Button from "./Button";
import Icon from "./Icon";
import UnstyledButton from "./UnstyledButton";

function Card({ data, onClick }) {
  const { img, name, age, place, gender } = data;

  return (
    <Wrapper>
      <ImageWrapper>
        <img src={img} alt={name} />
        <BookmarkButton>
          <Icon id="bookmark" size={24} strokeWidth={2} />
        </BookmarkButton>
      </ImageWrapper>
      <Details>
        <Line>
          <Icon
            id={gender === "he" ? "mars" : "venus"}
            size={24}
            strokeWidth={2}
          />
          <h3>
            <strong>{name}</strong>
          </h3>
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
      <Button type="fill" style={{ width: "100%" }} onClick={onClick}>
        Детальніше
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 24px;
  border: 1px solid #d8d7dd;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

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

export default Card;
