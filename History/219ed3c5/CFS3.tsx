import styled from "styled-components";
import KingWhite from "./KingWhite";

function App() {
  return (
    <Wrapper>
      <KingWhite size={100} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  --color-light: #eeeed2;
  --color-green: #779656;

  display: flex;
  justify-content: center;
  width: 50%;
  background-color: var(--color-light);
  /* background-color: var(--color-green); */
`;

export default App;
