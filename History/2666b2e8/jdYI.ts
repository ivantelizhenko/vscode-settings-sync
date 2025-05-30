import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createGame as createGameAPI } from '../service/supabaseService';

function useCreateGame() {
  const queryClient = useQueryClient();

  const { mutate: createGame } = useMutation(createGameAPI, {
    onSuccess: () => {
      queryClient.invalidateQueries(['game', '222']);
    },
  });

  return { createGame };
}

export default useCreateGame;
