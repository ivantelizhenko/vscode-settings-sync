import styled from "styled-components";
import Button from "./Button";
import Icon from "./Icon";
import UnstyledButton from "./UnstyledButton";

function Card({ data }) {
  const { img, name, age, place } = data;

  return (
    <Wrapper>
      <ImageWrapper>
        <img src={img} alt={name} />
        <BookmarkButton>
          <Icon id="bookmark" size={16} strokeWidth={2} />
        </BookmarkButton>
      </ImageWrapper>
      <Details>
        <Line>
          <Icon 
        </Line>
      </Details>
      <Button type="fill" style={{ width: "100%" }}>
        Детальніше
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 24px;
  border: 1px solid #d8d7dd;
  border-radius: 24px;
`;

const ImageWrapper = styled.div`
  border-radius: 24px;
  position: relative;

  & img {
    width: 100%;
    object-fit: cover;
  }
`;

const BookmarkButton = styled(UnstyledButton)`
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 16px;
  background-color: #fff;
`;

export default Card;
