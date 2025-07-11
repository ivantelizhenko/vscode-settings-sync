export async function AJAX(url: string) {
  const res = await fetch(url);

  if (!res.ok) throw new Error('Problem with fetching');

  const data = await res.json();

  return data;
}
