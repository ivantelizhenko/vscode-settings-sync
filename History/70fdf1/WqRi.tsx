import { useEffect, useState } from "react";
import styled from "styled-components";
import { useStore } from "../contexts/store";

import ModalWindow from "../components/ModalWindow";
import { Button } from "../components/Button";
import { Message } from "../components/Message";
import useGetGame from "../hooks/useGetGame";
import { useLocation } from "react-router-dom";
import toast from "react-hot-toast";

function LinkWindow() {
  const [isCloseLinkWindow, setIsCloseLinkWindow] = useState<"open" | "close">(
    "close"
  );

  const { gameId } = useStore();
  const { data: game } = useGetGame(gameId);
  const location = useLocation();
  const fullUrl = `${window.location.origin}${location.pathname}${location.search}${location.hash}`;

  useEffect(() => {
    if (
      game &&
      ((game.userIdX && !game.userIdO) || (!game.userIdX && game.userIdO))
    ) {
      setIsCloseLinkWindow("open");
    }
  }, [game]);

  function handleCopyLink() {
    navigator.clipboard.writeText(fullUrl);
    toast.success("Link has been copied successfully");
    setIsCloseLinkWindow("close");
  }

  return (
    <ModalWindow isOpen={isCloseLinkWindow === "open"}>
      <Wrapper>
        <LinkMessage>
          Room link: <span>{fullUrl}</span>
        </LinkMessage>
        <ButtonsWrapper>
          <LinkWindowButton onClick={handleCopyLink}>
            Copy link
          </LinkWindowButton>
          <LinkWindowButton onClick={() => setIsCloseLinkWindow("close")}>
            Close
          </LinkWindowButton>
        </ButtonsWrapper>
      </Wrapper>
    </ModalWindow>
  );
}

const LinkMessage = styled(Message)`
  white-space: nowrap;
  font-size: 1.25rem;

  span {
    font-weight: 400;
    font-size: 1rem;

    letter-spacing: 0px;
  }
`;

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

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

const LinkWindowButton = styled(Button)`
  width: 100%;
  flex: 1;

  &:first-child {
    flex: 2;
  }

  background-color: var(--color-primary);
  color: var(--color-surface);

  &:hover {
    background-color: var(--color-primary-hover);
    transition: background-color 0.2s;
  }
`;

export default LinkWindow;
