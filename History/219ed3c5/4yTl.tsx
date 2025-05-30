import styled from "styled-components";

import RootWhite from "./figures/RootWhite";

function App() {
  return (
    <>
      <Wrapper $light={true}>
        <RootWhite size={100} />
      </Wrapper>
      <Wrapper $light={false}>
        <RootWhite size={100} />
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
