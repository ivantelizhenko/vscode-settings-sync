import { useMutation } from "@tanstack/react-query";
import { setUserId as setUserIdAPI } from "../service/supabase";

function useCreateGame() {
  const { mutateAsync: setUserId } = useMutation({
    mutationFn: setUserIdAPI,
  });

  return { setUserId };
}

export default useCreateGame;
