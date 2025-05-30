import styled from "styled-components";

import QueenWhite from "./figures/QueenWhite";
import QueenBlack from "./figures/QueenBlack";

function App() {
  return (
    <>
      <Wrapper $light={true}>
        <QueenBlack size={100} />
      </Wrapper>
      <Wrapper $light={false}>
        <QueenWhite size={100} />
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
