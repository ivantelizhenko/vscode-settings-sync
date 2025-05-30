import supabase, { supabaseUrl } from './supabase';

export async function getUsers() {
  const { data, error } = await supabase.from('users').select('*');

  if (error) {
    console.error(error);
    throw new Error('Cabins could not be loaded');
  }

  return data;
}

const { data, error } = await supabase
  .from('users')
  .insert([{ some_column: 'someValue', other_column: 'otherValue' }])
  .select();

export async function createUser(newUser) {
  // const hasImagePath = newUser.image?.startsWith?.(supabaseUrl);
  // const imageName = `${Math.random() * 10}-${newUser.image.name}`.replaceAll(
  //   '/',
  //   ''
  // );
  // const imagePath = hasImagePath
  //   ? newUser.image
  //   : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  const { data, error } = supabase
    .from('users')
    .insert([newUser])
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error('Cabins could not be created');
  }

  return data;
}
