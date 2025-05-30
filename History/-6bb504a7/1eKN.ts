import { useMutation, useQueryClient } from '@tanstack/react-query';

import { NewGameType } from '../types/SupabaseServicesTypes';

function useDeleteGame() {
  const queryClient = useQueryClient();

  const { mutateAsync: deleteGame } = useMutation<void, Error, NewGameType>({
    mutationFn: deleteGame,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['game'] });
    },
  });

  return { createGame };
}

export default useDeleteGame;
