import { useMutation } from "@tanstack/react-query";
import { updateBoard as updateBoardAPI } from "../service/supabase";

function useUpdateBoard() {
  const { mutateAsync: updateBoard } = useMutation({
    mutationFn: updateBoardAPI,
  });

  return { updateBoard };
}

export default useUpdateBoard;
