import { useQuery } from '@tanstack/react-query';
import { getGame as getGameAPI } from '../service/supabaseService';

function useCreateGame(id: string) {
  return useQuery(['game'], () => getGameAPI(id));
}

export default useCreateGame;
