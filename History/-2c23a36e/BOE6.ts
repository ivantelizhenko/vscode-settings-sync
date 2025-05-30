import { useMutation } from "@tanstack/react-query";
import { removeUserId as removeUserIdAPI } from "../service/supabase";

function useremoveUserId() {
  const { mutateAsync: removeUserId } = useMutation({
    mutationFn: removeUserIdAPI,
  });

  return { removeUserId };
}

export default useremoveUserId;
