import supabase, { supabaseUrl } from './supabase';

export async function getUsers() {
  const { data, error } = await supabase.from('users').select('*');

  if (error) {
    console.error(error);
    throw new Error('Cabins could not be loaded');
  }

  return data;
}
