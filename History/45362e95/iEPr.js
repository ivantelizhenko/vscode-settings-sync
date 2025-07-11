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

  // 1. Create/edit cabin
  let query = supabase.from('users');

  query = query.insert([newUser]);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error('Cabins could not be created');
  }

  // 2. Upload image
  if (hasImagePath) return data;

  const { error: storageError } = await supabase.storage
    .from('cabin-images')
    .upload(imageName, newCabin.image);

  // 3. Delete the cabin IF there was an error uploading image
  if (storageError) {
    await supabase.from('cabins').delete().eq('id', data.id);
    console.error(storageError);
    throw new Error(
      'Cabin image could not be uploaded and cabin was not created'
    );
  }

  return data;
}
