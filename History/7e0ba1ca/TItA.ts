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
