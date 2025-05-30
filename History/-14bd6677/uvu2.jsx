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
        <UnstyledButton>
          <Icon id="bookmark" size={16} strokeWidth={2} />
        </UnstyledButton>
      </ImageWrapper>
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

  & img {
    width: 100%;
    object-fit: cover;
  }
`;

export default Card;
