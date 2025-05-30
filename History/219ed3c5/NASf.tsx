import styled from "styled-components";

import BishopWhite from "./figures/BishopWhite";
import BishopBlack from "./figures/BishopBlack";
import PawnBlack from "./figures/PawnBlack";
import PawnWhite from "./figures/PawnWhite";
import KnightWhite from "./figures/KnightWhite";
import KnightBlack from "./figures/KnightBlack";

function App() {
  return (
    <>
      <Wrapper $light={true}>
        <BishopWhite size={100} />
        <BishopBlack size={100} />
        <PawnWhite size={100} />
        <PawnBlack size={100} />
        <KnightWhite size={100} />
        <KnightBlack size={100} />
      </Wrapper>
      <Wrapper $light={false}>
        <BishopWhite size={100} />
        <BishopBlack size={100} />
        <PawnWhite size={100} />
        <PawnBlack size={100} />
        <KnightWhite size={100} />
        <KnightBlack size={100} />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div<{ $light: boolean }>`
  --color-light: #eeeed2;
  --color-green: #779656;

  display: flex;
  justify-content: center;
  width: 50%;
  background-color: ${(props) =>
    props.$light ? "var(--color-light)" : "var(--color-green)"};
`;

export default App;
