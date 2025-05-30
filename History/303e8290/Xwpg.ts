export async function getUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');

  if (!res.ok) throw Error('Failed getting users');
  const { data } = await res.json();
  console.log(data);
  return data;
}
