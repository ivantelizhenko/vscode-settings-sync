import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateTime as updateTimeAPI } from '../service/supabaseService';
import { useAppSelector } from '../../store/store';

function useUpdateTime() {
  const queryClient = useQueryClient();
  const { gameId, turn } = useAppSelector(state => state.status)!;

  const { mutateAsync: updateTime } = useMutation({
    mutationFn: () => updateTimeAPI(time, gameId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['game'] });
    },
  });

  return { updateTime };
}

export default useUpdateTime;
