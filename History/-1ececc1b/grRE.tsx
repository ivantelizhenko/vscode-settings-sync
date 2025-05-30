import styled from "styled-components";
import X from "./X";
import O from "./O";

export type IconType = "X" | "O" | null;

const items = { X, O };

function Tile({ icon }: { icon: IconType }) {
  const Icon = items[icon!];
  return <Wrapper>{icon && <Icon />}</Wrapper>;
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
  padding: 24px;
`;

export default Tile;
