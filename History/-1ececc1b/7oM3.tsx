import styled from "styled-components";

function Tile({ icon }: { icon: "x" | "o" | null }) {
  return <Wrapper></Wrapper>;
}

const Wrapper = styled.button`
  display: grid;
  place-content: center;
  width: 100%;
  height: 100%;
  font-size: 8rem;
  border: none;
  cursor: default;
  background-color: var(--color-main);
`;

export default Tile;
