import { useMutation } from '@tanstack/react-query';
import { updateTime as updateTimeAPI } from '../service/supabaseService';
import { useAppSelector } from '../../store/store';

function useUpdateTime() {
  // const queryClient = useQueryClient();
  const gameId = useAppSelector(state => state.status.gameId)!;
  const turn = useAppSelector(state => state.timer.turn);

  const { mutateAsync: updateTime } = useMutation({
    mutationFn: () => updateTimeAPI(turn, gameId),
  });

  return { updateTime };
}

export default useUpdateTime;
