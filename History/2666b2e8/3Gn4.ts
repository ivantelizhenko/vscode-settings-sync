import { createGame } from '../service/supabaseService';

function useCreateGame() {
  const queryClient = useQuer;

  const { mutate: createGame } = useMutation(addGame, {
    onSuccess: () => {
      queryClient.invalidateQueries(['games']); // оновлює кеш
    },
  });
}

export default useCreateGame;
