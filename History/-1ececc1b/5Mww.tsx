import styled from "styled-components";
import X from "./X";

export type IconType = { icon: "X" | "O" | null };

const items = { X, O };

function Tile({ icon }: IconType) {
  const Icon = icon && items[icon];
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
`;

export default Tile;
