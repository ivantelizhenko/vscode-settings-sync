import { API_URL } from '../utils/constants';

async function getCountries() {
  const res = await fetch(`${API_URL}/countries`);

  if (!res.ok) throw new Error('Problem with fetching countries');

  console.log(res);
  const data = await res.json();

  console.log(data);
}
