import { useQuery } from '@tanstack/react-query';
import { getGame as getGameAPI } from '../service/supabaseService';

function useCreateGame() {
  return useQuery({ queryKey: ['game'] }, getGameAPI);
}

export default useCreateGame;
