import { useMutation, useQueryClient } from "@tanstack/react-query";

function useCreateGame() {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation({
    mutationFn: createGame,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["game"] });
    },
  });

  return { createGame };
}

export default useCreateGame;
