import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addPlayer as addPlayerAPI } from "../service/supabase";

function useAddPlayer() {
  // const queryClient = useQueryClient();

  const { mutateAsync: addPlayer, isPending } = useMutation({
    mutationFn: addPlayerAPI,
    // onSuccess: () => {
    //   queryClient.refetchQueries({ queryKey: ["game"] });
    // },
  });

  return { addPlayer, isPending };
}

export default useAddPlayer;
