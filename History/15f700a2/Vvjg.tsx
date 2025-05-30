import { useNavigate } from "react-router-dom";
import useCreateGame from "../hooks/useCreateGame";
import { useStore } from "../contexts/store";

function Menu() {
  const { setGameId } = useStore();
  const navigate = useNavigate();
  const { createGame } = useCreateGame();

  async function handleStart() {
    const id = Math.random().toString();
    setGameId(id);
    await createGame(id);
    navigate(`/game/${id}`);
  }

  return (
    <div>
      <button onClick={handleStart}>Start</button>
    </div>
  );
}

export default Menu;

import styled from "styled-components";
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
