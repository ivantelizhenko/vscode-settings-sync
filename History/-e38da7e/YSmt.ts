import { supabase } from "../lib/supabase";
// import { isMoreThanFiveMinutesApart } from "../utils/helpers";

export async function createGame(id: string) {
  const now = new Date();

  const { data: game } = await supabase
    .from("games")
    .insert([{ id, createdAt: now }])
    .select();

  return game;
}

export async function getGame(gameId: string) {
  const { data: game, error } = await supabase
    .from("games")
    .select("*")
    .eq("id", gameId)
    .single();

  if (error) console.log(error);

  return game;
}

// export async function getGames() {
//   const { data: games, error } = await supabase.from("games").select("*");
//   const game = games?.at(0);

//   // Якщо ігор взагалі не знайдено
//   if (error || games === null) {
//     const game = await resetGame();
//     return game;
//   }

//   // Якщо ігор більше, аніж 1
//   if (games && games.length > 1) {
//     // Видалити всі, що є
//     await deleteGame();

//     // Перевірити, чи є якісь ігри
//     const { data: games } = await supabase.from("games").select("*");

//     // Якщо немає, то створити нову
//     if (games && games.length === 0) {
//       const game = await resetGame();
//       return game;
//     }
//   }

//   const isUnactiveByCreatedAt =
//     game.updatedAt === null &&
//     isMoreThanFiveMinutesApart({ time: game.createdAt, type: "created" });
//   const isUnactiveByUpdatedAt =
//     !!game.updatedAt &&
//     isMoreThanFiveMinutesApart({ time: game.updatedAt, type: "updated" });

//   if (
//     (game.userIdX || game.userIdO) &&
//     (isUnactiveByCreatedAt || isUnactiveByUpdatedAt)
//   ) {
//     const game = await resetGame();
//     return game;
//   }

//   return game;
// }

// export async function deleteGame() {
//   await supabase.from("games").delete().neq("id", "");
// }

// export async function addUserId({
//   userId,
//   side,
// }: {
//   userId: string;
//   side: "X" | "O";
// }) {
//   const { data: game } = await supabase.from("games").select("*").single();

//   if (
//     (game.userIdX && game.userIdO) ||
//     game === null ||
//     game.userIdX === userId ||
//     game.userIdO === userId
//   )
//     return;

//   const addUserId = side === "O" ? { userIdO: userId } : { userIdX: userId };

//   await supabase.from("games").update(addUserId).eq("id", game.id);
// }

// export async function updateBoard(board: string) {
//   const { data: game } = await supabase.from("games").select("*").single();
//   const nextTurn = game.turn === "X" ? "O" : "X";

//   const now = new Date();

//   await supabase
//     .from("games")
//     .update({ board, turn: nextTurn, updatedAt: now })
//     .eq("id", game.id);
// }

// export async function resetGame() {
//   await deleteGame();
//   const game = await createGame();

//   return game;
// }
