import { getGame as getGameAPI } from '../service/supabaseService';
import { useAppSelector } from '../../store/store';

function useGetBoard() {
  const gameId = useAppSelector(state => state.status.id);

  return useQuery({
    queryKey: ['game', gameId],
    queryFn: () => getGameAPI(gameId!),
  });
}

export default useGetBoard;
