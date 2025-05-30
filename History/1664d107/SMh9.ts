import { supabase } from '../../lib/supabase';
import { BoardType, PrevMoveObject } from '../types/BoardTypes';
import { SideColor } from '../types/StatusTypes';
import { NewGameType } from '../types/SupabaseServicesTypes';

export async function createGame({
  gameId,
  userId,
  side,
  board,
  time,
  extraSeconds,
}: NewGameType) {
  const sideTransform =
    side === 'w' ? { sideWhite: userId } : { sideBlack: userId };
  const boardJSON = JSON.stringify(board);

  const newGame = {
    id: gameId,
    ...sideTransform,
    board: boardJSON,
    time,
    extraSeconds,
    timeWhite: time * 60,
    timeBlack: time * 60,
  };

  await supabase.from('games').insert([newGame]);
}

export async function deleteGame(id: string) {
  await supabase.from('games').delete().eq('id', id);
}

export async function addOpponent(gameId: string, userId: string) {
  const { data: players } = await supabase
    .from('games')
    .select('sideWhite, sideBlack')
    .eq('id', gameId)
    .single();

  if (!players) return;

  const { sideWhite } = players;

  const opponent =
    sideWhite !== '' ? { sideBlack: userId } : { sideWhite: userId };

  await supabase.from('games').update(opponent).eq('id', gameId);
}

export async function updateBoard(
  lastMove: PrevMoveObject,
  board: BoardType,
  gameId: string
) {
  const boardJSON = JSON.stringify(board);
  const { data } = await supabase.from('games').select('turn').eq('id', gameId);
  const newTurn = data![0].turn === 'w' ? 'b' : 'w';

  await supabase
    .from('games')
    .update({ lastMove, board: boardJSON, turn: newTurn })
    .eq('id', gameId);
}

export async function updateTime(
  side: SideColor,
  turn: SideColor,
  gameId: string
) {
  const { data, error } = await supabase
    .from('games')
    .select('timeWhite, timeBlack')
    .eq('id', gameId)
    .single();

  if (error?.message) return;

  const currentTurn =
    turn === 'w'
      ? { timeWhite: data?.timeWhite - 1 }
      : { timeBlack: data?.timeBlack - 1 };

  if (side === turn) {
    await supabase.from('games').update(currentTurn).eq('id', gameId);
  }
}

export async function setGameOver(gameId: string) {
  const { data } = await supabase
    .from('games')
    .select('isGameOver')
    .eq('id', gameId)
    .single();

  if (data?.isGameOver) return;

  const { data: result } = await supabase
    .from('games')
    .update({ isGameOver: true })
    .eq('id', gameId)
    .select();

  console.log(result);
}

export async function getBoard(id: string) {
  const { data } = await supabase
    .from('games')
    .select('board')
    .eq('id', id)
    .single();

  if (!data) return;

  const board = JSON.parse(data.board);
  return board;
}

export async function getGame(id: string) {
  const { data } = await supabase.from('games').select('*').eq('id', id);

  const game = data!.map(data => ({
    ...data,
    board: JSON.parse(data.board),
  }));

  return game;
}
export async function getPlayers(id: string) {
  const { data } = await supabase
    .from('games')
    .select('sideWhite, sideBlack')
    .eq('id', id)
    .single();

  return data;
}
