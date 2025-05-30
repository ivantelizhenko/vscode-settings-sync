import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createGame as createGameAPI } from '../service/supabaseService';
import { NewGameType } from '../types/SupabaseServicesTypes';

function useCreateGame() {
  const queryClient = useQueryClient();

  const { mutateAsync: createGameMutation } = useMutation<
    void,
    Error,
    NewGameType
  >(createGame, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['game'] });
    },
  });

  return { createGame };
}

export default useCreateGame;
