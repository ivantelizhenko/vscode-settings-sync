import { Button } from "./Button";
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
