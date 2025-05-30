import { createGame } from '../service/supabaseService';

function useCreateGame() {
  const { mutate: createGame } = useMutation(addGame, {
    onSuccess: () => {
      queryClient.invalidateQueries(['games']); // оновлює кеш
    },
  });
}

export default useCreateGame;
