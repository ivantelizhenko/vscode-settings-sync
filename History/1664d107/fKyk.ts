import { supabase } from '../lib/supabaseClient';

export async function createGame() {
  await supabase
    .from('games')
    .insert([{ some_column: 'someValue', other_column: 'otherValue' }]);
}
