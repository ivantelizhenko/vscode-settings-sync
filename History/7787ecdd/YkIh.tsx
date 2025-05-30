import styled from "styled-components";
import { useStore } from "../contexts/store";
import ModalWindow from "./ModalWindow";
import { useEffect, useState } from "react";
import { Button } from "./Button";

function GameOverWindow() {
  const [isCloseGameOverWindow, setIsCloseGameOverWindow] = useState(true);
  const { isGameOver } = useStore();

  useEffect(() => {
    if (isGameOver.message) {
      setIsCloseGameOverWindow(true);
      setTimeout(() => setIsCloseGameOverWindow(false), 2000);
    }
  }, [isGameOver.message]);

  return (
    <ModalWindow isOpen={isCloseGameOverWindow}>
      <Wrapper>
        <Message>{isGameOver.message}</Message>
        <ButtonCloseModalWindow onClick={() => setIsCloseGameOverWindow(false)}>
          Close
        </ButtonCloseModalWindow>
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

const ButtonCloseModalWindow = styled(Button)`
  width: 100%;
  padding: 6px 12px;
  background-color: var(--color-primary);
  color: var(--color-surface);

  &:hover {
    background-color: var(--color-primary-hover);
  }
`;

export default GameOverWindow;
