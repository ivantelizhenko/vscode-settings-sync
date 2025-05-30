import { useMutation } from '@tanstack/react-query';
import { createGame as createGameAPI } from '../service/supabaseService';

function useCreateGame() {
  const { mutateAsync: createGame } = useMutation({
    mutationFn: createGameAPI,
  });

  return { createGame };
}

export default useCreateGame;
