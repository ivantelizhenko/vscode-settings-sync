import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addOpponent as addOpponentAPI } from '../service/supabaseService';

function useAddOpponent() {
  const queryClient = useQueryClient();

  const { mutateAsync: addOpponent } = useMutation({
    mutationFn: addOpponentAPI,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['game'] });
    },
  });

  return { addOpponent };
}

export default useAddOpponent;
