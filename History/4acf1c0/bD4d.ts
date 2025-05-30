import { useMutation } from '@tanstack/react-query';
import { updateTime as updateTimeAPI } from '../service/supabaseService';
import { useAppSelector } from '../../store/store';

function useUpdateTime() {
  // const queryClient = useQueryClient();
  const { gameId, side } = useAppSelector(state => state.status)!;
  const turn = useAppSelector(state => state.timer.turn);

  const { mutateAsync: updateTime } = useMutation({
    mutationFn: () => updateTimeAPI(side, turn, gameId),
  });

  return { updateTime };
}

export default useUpdateTime;
