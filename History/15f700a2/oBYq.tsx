import styled from "styled-components";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";
import useCreateGame from "../hooks/useCreateGame";
import useGetGame from "../hooks/useGetGame";
import { useStore } from "../contexts/store";
import { useEffect } from "react";

function Menu() {
  const { gameId, setGameId } = useStore();
  const navigate = useNavigate();
  const { createGame } = useCreateGame();
  const { game } = useGetGame(gameId);

  useEffect(() => {}, [gameId]);

  async function handleStart() {
    const id = Math.random().toString();
    createGame(id);
    setGameId(id);

    navigate(`/game/${id}`);
  }

  return (
    <Wrapper>
      <MenuButton onClick={handleStart}>Start</MenuButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  place-self: center;
`;

const MenuButton = styled(Button)`
  background-color: var(--color-surface);
  color: var(--color-primary-darker);
  padding-left: 128px;
  padding-right: 128px;

  width: 100%;

  &:hover {
    text-decoration: underline;
  }
`;

export default Menu;
