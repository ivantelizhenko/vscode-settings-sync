import { useMutation } from "@tanstack/react-query";
import { removeUserId as removeUserIdAPI } from "../service/supabase";

function useRemoveUserId() {
  const { mutateAsync: removeUserId } = useMutation({
    mutationFn: removeUserIdAPI,
  });

  return { removeUserId };
}

export default useRemoveUserId;
