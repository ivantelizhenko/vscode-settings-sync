import { UserType } from '../contexts/userContext/AppContextTypes';

export async function getJSON(url: string) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error('Problem with fetching');
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function sendJSON(url: string, upload: UserType) {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(upload),
  });

  if (!res.ok) throw new Error('Problem with sending data to server');

  const data = res.json();
  return data;
}
