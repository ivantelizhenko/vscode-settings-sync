import { supabase } from '../lib/supabaseClient';

export async function createGame(gameData) {
  await supabase.from('games').insert([gameData]);
}
