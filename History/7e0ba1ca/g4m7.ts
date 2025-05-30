import { API_URL } from '../utils/constants';

export async function AJAX(url) {
  const res = await fetch(`${API_URL}/countries`);

  if (!res.ok) throw new Error('Problem with fetching');

  const data = await res.json();

  return data;
}
