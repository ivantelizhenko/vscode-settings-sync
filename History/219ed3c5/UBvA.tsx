import styled from "styled-components";
import KingWhite from "./figures/KingWhite";
import KingBlack from "./figures/KingBlack";

function App() {
  return (
    <>
      <Wrapper $light={true}>
        <KingWhite size={100} />
      </Wrapper>
      <Wrapper $light={false}>
        <KingBlack size={100} />
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
