import { supabase } from '../../lib/supabase';

export async function createGame(gameData: {
  id: string;
  board: string;
  time: string;
  [sideAPI: string]: string;
}) {
  await supabase.from('games').insert([gameData]);
}

export async function getGame(gameId: string) {
  const { data } = await supabase.from('games').select('*').eq('id', gameId);

  const game = data!.map(data => ({
    ...data,
    board: JSON.parse(data.board),
  }));

  return game;
}
