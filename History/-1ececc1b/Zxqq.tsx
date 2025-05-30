import styled from "styled-components";
import X from "./X";
import O from "./O";

export type IconType = "X" | "O" | null;

const items = { X, O };



function Tile({ icon, ...delegated }: React.ButtonHTMLAttributes<HTMLButtonElement> && { icon: IconType }) {
  const Icon = items[icon!];
  return <Wrapper {...delegated}>{icon && <Icon />}</Wrapper>;
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
  padding: 12px;
`;

export default Tile;
