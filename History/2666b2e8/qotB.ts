import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createGame as createGameAPI } from '../service/supabaseService';
import { NewGameType } from '../types/SupabaseServicesTypes';

function useCreateGame() {
  const queryClient = useQueryClient();

  const { mutateAsync: createGame } = useMutation<void, Error, NewGameType>(
    (data: NewGameType) => createGameAPI(data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['game'] });
      },
    }
  );

  return { createGame };
}

export default useCreateGame;
