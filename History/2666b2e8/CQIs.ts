import { useMutation } from '@tanstack/react-query';

function useCreateGame() {
  const { mutateAsync: createGame } = useMutation({
    mutationFn: createGameAPI,
  });

  return { createGame };
}

export default useCreateGame;
