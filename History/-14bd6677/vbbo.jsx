import styled from "styled-components";
import Button from "./Button";
import Icon from "./Icon";

function Card({ data }) {
  const { img, name, age, place } = data;

  return (
    <Wrapper>
      <ImageWrapper>
        <img src={img} alt={name} />
        <Icon id="bookmark" size={}/>
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
