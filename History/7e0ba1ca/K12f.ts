import { API_URL } from '../utils/constants';

export async function AJAX(url) {
  const res = await fetch(url);

  if (!res.ok) throw new Error('Problem with fetching');

  const data = await res.json();

  return data;
}
