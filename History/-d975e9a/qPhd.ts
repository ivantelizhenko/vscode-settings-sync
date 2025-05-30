import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateGame as updateGameAPI } from "../service/supabase";

function useAddPlayer() {
  // const queryClient = useQueryClient();

  const { mutateAsync: addPlayer, isPending } = useMutation({
    mutationFn: () => updateGameAPI,
    // onSuccess: () => {
    //   queryClient.refetchQueries({ queryKey: ["game"] });
    // },
  });

  return { addPlayer, isPending };
}

export default useAddPlayer;
