import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import GameEnviroment from "./components/GameEnvironment";
import Menu from "./components/Menu";

function App() {
  return (
    <Wrapper>
      <BrowserRouter>
        <Routes>
          <Route path="/menu" element={<Menu />} />
          <Route path="/game/:id" element={<GameEnviroment />} />
          <Route path="*" element={<Navigate replace to="/menu" />} />
        </Routes>
      </BrowserRouter>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  --color-main: #18bdac;
  --color-main-darker-lite: #16b1a4;
  --color-main-darker: #0ca192;
  --color-main-lighter: #50d3c4;
  --color-x: #545453;
  --color-o: #f2ecd2;
  --color-modal-bg: #e0f3f1;

  background-color: var(--color-main);
  height: 100%;

  font-family: "Oswald", sans-serif;
`;

export default App;
