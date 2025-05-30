import styled from "styled-components";
import KingWhite from "./KingWhite";

function App() {
  return (
    <Wrapper $light={true}>
      <KingWhite size={100} />
    </Wrapper>
  );
}

const Wrapper = styled.div{light: boolean}>`
  --color-light: #eeeed2;
  --color-green: #779656;

  display: flex;
  justify-content: center;
  width: 50%;
  background-color: var(--color-green);
  background-color: var(--color-light);
`;

export default App;
