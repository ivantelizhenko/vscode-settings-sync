import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createGame as createGameAPI } from '../service/supabaseService';
import { NewGameType } from '../types/SupabaseServicesTypes';

function useCreateGame() {
  const queryClient = useQueryClient();

  const { mutate: createGame } = useMutation<NewGameType>(createGameAPI, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['game'] });
    },
  });

  return { createGame };
}

export default useCreateGame;
