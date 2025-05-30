import { createGame as createGameAPI } from '../service/supabaseService';

function useCreateGame() {
  const queryClient = useQuer;

  const { mutate: createGame } = useMutation(createGameAPI, {
    onSuccess: () => {
      queryClient.invalidateQueries(['games']); // оновлює кеш
    },
  });
}

export default useCreateGame;
