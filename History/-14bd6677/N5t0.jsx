import styled from "styled-components";

function Card({ data }) {
  const { img, name, age, place } = data;

  return <Wrapper></Wrapper>;
}

const Wrapper = styled.div`
  padding: 24px;
  border: 1px solid #d;
`;

export default Card;
