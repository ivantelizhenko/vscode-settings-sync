import { supabase } from '../../lib/supabase';

export async function createGame(gameData: {
  id: string;
  board: string;
  time: string;
  [sideAPI: string]: string;
}) {
  await supabase.from('games').insert([gameData]);
}
