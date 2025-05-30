import { API_URL } from '../utils/constants';

export async function getCountries() {
  const res = await fetch(`${API_URL}/countries`);

  if (!res.ok) throw new Error('Problem with fetching countries');

  const data = await res.json();

  return data;
}
