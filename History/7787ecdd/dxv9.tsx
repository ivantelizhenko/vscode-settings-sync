import styled from "styled-components";
import { useStore } from "../contexts/store";
import ModalWindow from "./ModalWindow";
import { useState } from "react";

function GameOverWindow() {
  const [isCloseGameOverWindow, setIsCloseGameOverWindow] = useState(false);
  const { isGameOver } = useStore();

  return (
    <ModalWindow isOpen={!!isGameOver.message}>
      <Wrapper>
        <Message>{isGameOver.message}</Message>
      </Wrapper>
    </ModalWindow>
  );
}

const Wrapper = styled.div`
  width: 100%;
  background-color: var(--color-surface);
  color: var(--color-gray);
  padding: 32px;
  text-align: center;
  display: grid;
  row-gap: 24px;
  text-transform: uppercase;
`;

const Message = styled.p`
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: 2px;
`;

export default GameOverWindow;
