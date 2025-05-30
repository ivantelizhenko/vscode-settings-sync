import styled from "styled-components";

function Turn() {
  return <Wrapper></Wrapper>;
}

const Wrapper = styled.p<{ $isO: boolean }>`
  position: absolute;
  left: 0;
  top: -10%;
  color: ${({ $isO }) => ($isO ? "var(--color-white)" : "var(--color-gray)")};
  width: 40px;

  @media (max-width: 750px) {
    top: -20%;
    width: 30px;
  }
`;

export default Turn;
