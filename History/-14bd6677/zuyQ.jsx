import styled from "styled-components";
import Button from "./Button";

function Card({ data }) {
  const { img, name, age, place } = data;

  return <Wrapper>
    <Button type="fill" style={{ width: "100%" }}>
  </Wrapper>;
}

const Wrapper = styled.div`
  padding: 24px;
  border: 1px solid #d8d7dd;
  border-radius: 24px;
`;

export default Card;
